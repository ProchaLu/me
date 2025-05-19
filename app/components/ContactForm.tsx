'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import IconHeader from './IconHeader';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <>
      <IconHeader props={{ id: 'contact' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-blue-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="relative z-10 text-blue-800 drop-shadow-md"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </span>
        Contact Me
      </IconHeader>
      <p className="mb-4 text-gray-600">
        If you have any questions or would like to get in touch, please fill out
        the form below. I’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const result = contactFormSchema.safeParse(formData);

          if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors({
              name: fieldErrors.name?.[0] ?? '',
              email: fieldErrors.email?.[0] ?? '',
              message: fieldErrors.message?.[0] ?? '',
            });
            return;
          }
          setErrors({
            name: '',
            email: '',
            message: '',
          });

          const response = await fetch('https://formspree.io/f/manopnql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.status === 200) {
            toast.success('Message sent successfully!');
          } else {
            toast.error('Error sending message. Please try again later.');
          }

          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }}
        className="flex flex-col gap-4 rounded-xl w-full"
      >
        <div>
          <div className="relative z-0">
            <input
              id="name"
              aria-describedby="name"
              placeholder=" "
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
                errors.name
                  ? 'border-red-600'
                  : 'border-gray-300 focus:border-blue-600'
              }`}
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            <label
              htmlFor="name"
              className={`absolute text-m duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
        ${errors.name ? 'text-red-600' : 'text-gray-500'}
      `}
            >
              Name
            </label>
          </div>
          {errors.name && (
            <p id="name-help" className="mt-2 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <div className="relative z-0">
            <input
              id="email"
              aria-describedby="email"
              placeholder=" "
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
                errors.name
                  ? 'border-red-600'
                  : 'border-gray-300 focus:border-blue-600'
              }`}
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <label
              htmlFor="email"
              className={`absolute text-m duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
        ${errors.email ? 'text-red-600' : 'text-gray-500'}
      `}
            >
              Email
            </label>
          </div>
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <div className="relative z-0">
            <textarea
              rows={4}
              id="message"
              placeholder=" "
              aria-describedby="message-error-help"
              className={`block py-2.5 px-0 w-full resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
                errors.message
                  ? 'border-red-600'
                  : 'border-gray-300 focus:border-blue-600'
              }`}
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
            <label
              htmlFor="message"
              className={`absolute text-m duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
        ${errors.message ? 'text-red-600' : 'text-gray-500'}
      `}
            >
              Message
            </label>
          </div>
          {errors.message && (
            <p id="message-error-help" className="mt-2 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>
        <button className="group relative inline-flex h-[48px] items-center justify-center rounded-full bg-blue-500 px-6 font-medium text-white hover:bg-blue-600 transition cursor-pointer">
          <span className="z-10 pr-2">Send</span>
          <div className="absolute right-1 inline-flex h-10 w-10 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-5 text-white"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>
      </form>
    </>
  );
}
