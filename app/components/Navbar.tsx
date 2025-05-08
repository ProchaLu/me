'use client';
import Link from 'next/link';

export default function Navbar(props: {
  isExplorerOpen: boolean;
  setIsExplorerOpen: (isOpen: boolean) => void;
  isTerminalOpen: boolean;
  setIsTerminalOpen: (isOpen: boolean) => void;
}) {
  return (
    <nav className="flex items-center justify-between border-b-2 border-dark_border text-gray-700">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#0277bd"
          viewBox="0 0 48 48"
        >
          <path d="M44 11.11v25.78c0 1.27-.79 2.4-1.98 2.82l-8.82 4.14L34 33V15l-.8-10.85 8.82 4.14A2.98 2.98 0 0144 11.11z" />
          <path
            fill="#0277bd"
            d="M9 33.896L34 15V5.353c0-1.198-1.482-1.758-2.275-.86L4.658 29.239a2 2 0 00.107 3.032s1.324 1.232 1.803 1.574c.736.525 1.703.585 2.432.051z"
          />
          <path
            fill="#0288d1"
            d="M9 14.104L34 33v9.647c0 1.198-1.482 1.758-2.275.86L4.658 18.761a2 2 0 01.107-3.032s1.324-1.232 1.803-1.574c.736-.525 1.703-.585 2.432-.051z"
          />
        </svg>
        <div className="hidden ml-2 lg:block">
          {[
            'File',
            'Edit',
            'Selection',
            'View',
            'Go',
            'Run',
            'Terminal',
            'Help',
          ].map((item) => (
            <button
              key={`menu-${item}`}
              onClick={() => props.setIsTerminalOpen(!props.isTerminalOpen)}
              className="px-2 py-1 hover:bg-blue-500 cursor-default"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="ml-4 flex items-center lg:hidden px-4 py-2 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#000"
              d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"
            />
          </svg>
        </div>
      </div>
      <Link
        href="https://github.com/ProchaLu/me"
        className="hidden text-sm select-none sm:flex border-1 border-dark_border px-25 py-1 rounded-sm bg-gray-100 text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
        <span className="ml-1">me</span>
      </Link>
      <div className="flex items-center">
        <div className="flex py-2 mx-1">
          <button
            onClick={() => props.setIsExplorerOpen(!props.isExplorerOpen)}
            className="hover:bg-gray-300 p-1"
          >
            {props.isExplorerOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M17.5 1.25H3.75L2.5 2.5v13.75l1.25 1.25H17.5l1.25-1.25V2.5L17.5 1.25zm-7.5 15H3.75V2.5H10v13.75zm7.5 0h-6.25V2.5h6.25v13.75z"
                />
                <path fill="currentColor" d="M3.75 2.5H10V16.25H3.75z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M17.5 1.25H3.75L2.5 2.5v13.75l1.25 1.25H17.5l1.25-1.25V2.5L17.5 1.25zm-7.5 15H3.75V2.5H10v13.75zm7.5 0h-6.25V2.5h6.25v13.75z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => props.setIsTerminalOpen(!props.isTerminalOpen)}
            className="hover:bg-gray-300 p-1"
          >
            {props.isTerminalOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z"
                />
                <path fill="currentColor" d="M3 8h11v5H3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z"
                />
              </svg>
            )}
          </button>
          <button className="hover:bg-gray-300 p-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 1.25H3.75L2.5 2.5V16.25L3.75 17.5H17.5L18.75 16.25V2.5L17.5 1.25ZM10 16.25H3.75V2.5H10V16.25ZM17.5 16.25H11.25V2.5H17.5V16.25Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <div className="p-3 hover:bg-gray-300">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="currentColor" d="M14 8H3V7h11v1z" />
            </svg>
          </div>
          <div className="p-3 hover:bg-gray-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5V14H12V5H3ZM11 13H4V6H11V13Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 5H6V4H13V11H12V12H14V5V3H12H5V5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="hover:bg-red-500 hover:text-white p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
