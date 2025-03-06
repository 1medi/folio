import React from "react";
import { useForm } from "react-hook-form";
import { ContactFormSchema, ContactFormType } from "./interfaces";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const onSubmit = async(data: ContactFormType) => {
    try {
      const response = await fetch ("/api/contact", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body:JSON.stringify(data),
      });
      if(response.ok){
        setSuccessMessage("Your Message has been sent! Thank You and have a nice day!");
        reset
      } else {
        setSuccessMessage("Message Failed! Try again later.");
      }
    } catch (error) {
      console.error("Error sending message", error);
      setSuccessMessage("Error! Try again later.");
    }
  }

  return (
    <>
      <h1 id="contact" className="text-6xl font-bold  p-8 text-center">
        Let's Get in Touch!
      </h1>
      <form
        className="relative justify-center m-auto p-8 max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Name
          <input
            placeholder="Your Name"
            {...register("name", { required: "Name is Required " })}
            className="block w-full p-2 mb-2 border text-black  border-gray-300 rounded"
          />
          {errors.name && <p className="">{errors.name.message}</p>}
        </label>
        <label>
          Email
          <input
            {...register("email", { required: "Email is Required " })}
            placeholder="Your Email"
            className="block w-full p-2 mb-2 border text-black  border-gray-300 rounded"
          />
          {errors.email && <p className="">{errors.email.message}</p>}
        </label>
        <label>
          Message
          <textarea
            {...register("message", { required: "A Message is Required " })}
            placeholder="Your Message"
            className="block w-full p-2 mb-2 border border-gray-300 text-black rounded"
          />
          {errors.message && <p className="">{errors.message.message}</p>}
        </label>

        <button
          type="submit"
          className="w-full p-2 bg-[#004f2d] text-white rounded hover:bg-[#0b3021]"
        >
          Submit
        </button>
        {successMessage && <p className="text-center">{successMessage}</p>}
      </form>
    </>
  );
};

