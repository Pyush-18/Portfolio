"use client";

import { useEffect, useRef, useState } from "react";
import { WandSparkles } from "./WandSparkles";
import { Input } from "./ui/input";
import { Loader2, RotateCcw, Share } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Image from "next/image";

type ChatMessages = {
  sender: "user" | "ai";
  text: string;
}[];

function AiChat() {
  const [prompt, setPrompt] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessages>([]);
  const [loader, setLoader] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTalkWithAi = async () => {
    if (!prompt) return;
    setLoader(true);
    try {
      const response = await axios.post("/api/ai-qa", { userMessage: prompt });
      if (response?.data?.success) {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "user",
            text: prompt,
          },
          {
            sender: "ai",
            text: response?.data?.result,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
      toast.error("message not send");
    } finally {
      setLoader(false);
      setPrompt("");
      console.log(prompt);
    }
  };

  useEffect(() => {
    if (chatMessages?.length > 0) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  const handleEnterButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.key === "Enter") {
      handleTalkWithAi();
    }
  };

  const resetChatMessages = () => {
    if (chatMessages?.length > 0) {
      setChatMessages([]);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      className="w-5xl relative z-2 min-h-[calc(100vh-100px)] rounded-lg bg-[#11150f] p-3 flex flex-col  gap-5 justify-between"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="font-medium mr-2 ">AI chat</span>
          <span className="bg-[#a8e625] rounded-full px-3 py-1 text-sm font-light text-black">
            Beta
          </span>
        </div>
        <button
          onClick={resetChatMessages}
          className="bg-zinc-900 p-2 rounded-xl hover:bg-zinc-800 duration-200 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
      <div
        className={`w-full  rounded-lg ${chatMessages?.length > 0 && "min-h-[calc(100vh-265px)]"}`}
      >
        <div
          className={`max-w-xl flex flex-col mx-auto items-center gap-3 ${chatMessages?.length > 0 && "hidden"}`}
        >
          <WandSparkles />
          <p className="text-lg lg:text-4xl">
            How can I <span className="text-[#a8e625] italic">help you</span>{" "}
            Today?
          </p>
          <p className="text-center text-[#9d9da6] text-sm max-w-md">
            I can answer questions about Piyush, his projects, skills, or how to
            get in touch with him.
          </p>
        </div>
        <div
          className={`flex flex-col gap-4 max-h-[calc(100vh-320px)] overflow-y-auto pr-2`}
        >
          {chatMessages?.length > 0 &&
            chatMessages?.map((msg, index) => (
              <div ref={scrollRef} className="max-w-5xl px-3" key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: "backInOut",
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`chat ${msg?.sender === "user" ? "chat-end" : "chat-start"}`}
                >
                  <div className="chat-image hidden lg:block avatar">
                    <div className="w-10 bg-[#a8e625] p-1 rounded-full">
                      {msg.sender === "ai" ? (
                        <Image
                          alt="ai avatar"
                          src="/ai.svg"
                          width={10}
                          height={10}
                        />
                      ) : (
                        <Image
                          alt="user avatar"
                          src="/user.svg"
                          width={10}
                          height={10}
                        />
                      )}
                    </div>
                  </div>
                  <div className="chat-header">
                    {msg.sender === "user" ? "You" : "AI assistant"}
                  </div>
                  <div className="chat-bubble">{msg.text}</div>
                </motion.div>
              </div>
            ))}
        </div>
      </div>

      <div className="relative">
        <Input
          className="rounded-full p-5 border-[#a8e625]"
          type="text"
          placeholder="Type your prompt here..."
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleEnterButton}
        />
        <button
          disabled={loader}
          onClick={handleTalkWithAi}
          className={`bg-[#a8e625] rounded-full p-2 lg:w-20 text-black absolute right-0 bottom-0 flex items-center justify-center ${loader && "bg-[#a8e625]"}`}
        >
          {loader && <Loader2 className="animate-spin w-4 h-4 mr-3" />}
          <Share />
        </button>
      </div>
    </motion.div>
  );
}

export default AiChat;
