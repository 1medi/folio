import React from "react";

export default function Page() {
  return (
    <>
      <h1 id="contact" className="text-6xl font-bold  p-8 text-center">Let's Get in Touch!</h1>
      <form className="relative justify-center m-auto p-8 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="block w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="block w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="block w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}
