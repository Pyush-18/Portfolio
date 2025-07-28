import { knowledgeBase } from "@/lib/knowledgeBase";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
const client = new GoogleGenAI({apiKey: process.env.NEXT_GEMINI_API_KEY!})

export async function POST(req: NextRequest){
    const {userMessage} = await req.json()
    if(userMessage?.trim() === '' || !userMessage){
        return NextResponse.json({message: "Please enter the prompt first"}, {status: 400})
    }
    try {
        let contextForAi = "The user is asking questions about the piyush. Here is some information about the piyush who is the full stack developer:\n\n"
        for(const [key, value] of Object.entries(knowledgeBase)){
            if(key !== 'default'){
                contextForAi += `- ${key} : ${value}`
            }
        }
        contextForAi += `
            The user is asking about Piyush. Use the info below to answer concisely, keeping the tone friendly and helpful 😄.

            👉 If user replies with follow-up prompts like ["yes", "tell me more", "more", "explain", "what else", "ok"], provide additional relevant info from the original context 👍.

            🙏 If user says things like ["no", "thank you", "thanks", "nah", "I'm good"], respond politely (e.g., "You're welcome! 😊 Let me know if you want to explore more about Piyush or his work!").

            if the user ask for the project related or any question which need to be in different line you must use the following format:\n
            1. name1 - description\n
            2. name2 - description\n

            ⚠️ Edge Cases:
            - If the question is unclear or unrelated to Piyush, respond with:
            "Hmm, I'm not sure how that's related to Piyush 😅. But I can tell you about his projects, skills, or goals!"
            - If the user uses abusive or inappropriate language, respond with:
            "Let's keep things friendly 😇. I'm here to help you learn about Piyush's work, skills, and goals."
            - If the question repeats previously answered info, politely say:
            "I already shared that 😊. Want to know about his hobbies, skills, or future plans?"

            ✨ Feel free to suggest related topics such as:
            🎯 Projects (Get Placed, Navdurga Rooms, AI Trip Planner)
            🎵 Hobbies (flute, cricket)
            🛠️ Skills & tech stack
            🚀 Career goals

            🎨 Add emojis like 😎❤️🙏🎉😞😁✋💗🔥💪🏻👋💖 to make replies more lively and expressive.

            Now based on this information, answer the following user question about Piyush:

            "${userMessage}"

            If no relevant info is found, say so and suggest another topic related to Piyush. Keep it friendly and concise 😇.
        `;

        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                {
                    role: 'user',
                    parts:[
                        {
                            text: contextForAi
                        }
                    ]
                }
            ],
        })
        return NextResponse.json({result: response.text, success: true}, {status: 200})
    } catch (error) {
        return NextResponse.json({error, success: false}, {status: 500})
    }
}
