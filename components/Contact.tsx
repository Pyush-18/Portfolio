"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data, [name]: value });
  };

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {name, email, message} = data
      if(name?.trim() === "" || email?.trim() === "" || message?.trim() === ""){return toast.error("Please fill all the fields")}
      const response = await axios.post("/api/send-mail", data);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("message not send");
    } finally {
      setData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }
  };
  return (
    <div id="contact" className=" flex items-center min-h-[calc(100vh-80px)] justify-center px-4 py-10 bg-black">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start gap-10 border border-zinc-800 rounded-3xl p-6 lg:p-10 relative">
        <div className="w-full max-w-md lg:block">
          <Image
            src="/contact.svg"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="w-full h-auto"
            priority={true}
          />
        </div>

        <div className="w-full relative z-10 max-w-xl mt-4 md:mt-10 lg:mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Contact
          </h1>
          <form onSubmit={sendMail} className="flex flex-col gap-4">
            <Input
              name="name"
              className="text-zinc-200"
              type="name"
              placeholder="Enter your name"
              value={data?.name}
              onChange={changeHandler}
            />
            <Input
              name="email"
              className="text-zinc-200"
              type="email"
              value={data?.email}
              onChange={changeHandler}
              placeholder="Enter your email"
            />
            <Textarea
              name="message"
              className="text-zinc-200"
              placeholder="Type your message here"
              value={data?.message}
              onChange={changeHandler}
            />
            <Button
              disabled={loading}
              type="submit"
              className="w-fit px-6 flex items-center bg-lime-400 hover:bg-lime-500 text-black justify-center"
            >
              {loading && <Loader2 className="animate-spin w-4 h-4 " />}
              Send Message
            </Button>
          </form>
        </div>

        <div className="absolute  inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={1000} factor={2} fade speed={2} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Contact;
