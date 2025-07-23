import EmailTemplate from "@/components/EmailTemplate";
import {Resend} from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse | void> {
    const {name, email, message} = await req.json()
    console.log(name, email, message)
    if(!name || !email || !message){
        NextResponse.json({error: "Missing required fields"}, {status: 400})
    }
    try {
        const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['piyushjoshi1812@gmail.com'],
      subject: "New Contact Message",
      react: EmailTemplate({name, email, message }) as React.ReactElement,
    });
    if(response){
        return NextResponse.json({message: "Message send successfully", success: true}, {status: 200})
    }
    } catch (error) {
        console.log(error)
        return NextResponse.json({error, success: false}, {status: 500})   
    }
}