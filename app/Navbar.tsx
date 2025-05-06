export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-dark_border text-gray-500">
      {/* Left Section: Logo + Menu */}
      <div className="flex p-1">
        {/* Logo */}
        <div className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#29b6f6"
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
        </div>

        {/* Menu: Desktop */}
        <div className="hidden ml-2 p-1 lg:block">
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
              key={item}
              className="px-2 py-1 rounded-lg hover:bg-gray-300 cursor-default"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Hamburger: Mobile */}
        <div className="ml-4 flex items-center lg:hidden px-4 py-2 rounded-md hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#C5C5C5"
              d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"
            />
          </svg>
        </div>
      </div>

      {/* Center Title */}
      <h1 className="hidden py-3 text-sm pointer-events-none select-none sm:block">
        Lukas Prochazka - Portfolio
      </h1>

      {/* Right Section: Icons */}
      <div className="flex items-center">
        {/* View Mode Icons */}
        <div className="flex py-2 mx-1">
          {/* Split View */}
          <button className="p-1 rounded-md hover:bg-gray-300">
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
          </button>

          {/* Grid */}
          <button className="p-1 rounded-md hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zm0 12H3V8h11v5zm0-6H3V2h11v5z"
              />
            </svg>
          </button>

          {/* Columns */}
          <button className="p-1 rounded-md hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M17.5 1.25H3.75L2.5 2.5V16.25L3.75 17.5H17.5L18.75 16.25V2.5L17.5 1.25ZM10 16.25H3.75V2.5H10V16.25ZM17.5 16.25H11.25V2.5H17.5V16.25Z"
              />
            </svg>
          </button>
        </div>

        {/* Utility Icons */}
        <div className="flex">
          {/* Minimize */}
          <div className="p-3 hover:bg-gray-300 transition-transform duration-300">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path fill="currentColor" d="M14 8H3V7h11v1z" />
            </svg>
          </div>

          {/* Square */}
          <div className="p-3 hover:bg-gray-300 transition-transform duration-300">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 5V14H12V5H3ZM11 13H4V6H11V13Z" fill="currentColor" />
            </svg>
          </div>

          {/* Close (Red) */}
          <div className="hover:bg-red-500 hover:text-white p-3 transform duration-300">
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
