'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <h2>Contact Me</h2>
      <p>
        If you have any questions or would like to get in touch, please fill out
        the form below. I will get back to you as soon as possible.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          rows={4}
          onChange={(event) => {
            setMessage(event.currentTarget.value);
          }}
        />
      </form>
    </>
  );
}
