import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send email
    console.log('Email:', email);
    console.log('Message:', message);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
