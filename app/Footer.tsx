export default function Footer() {
  return (
    <footer className="flex justify-between border-t-2 border-dark_border text-gray-500 text-sm select-none">
      <div className="flex items-center cursor-pointer">
        <div className="relative p-1 px-2 h-full bg-blue-500 hover:bg-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M14.517 10.767l-4.473-4.473 4.473-4.473-.696-.696L9 5.945v.697l4.821 4.821.696-.696zM3.375 6.321l4.58 4.581-4.58 4.58.696.697L9 11.25v-.696L4.071 5.625l-.696.696z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M28.009 10.962a4.983 4.983 0 10-6.407 4.75 3.985 3.985 0 01-3.558 2.226h-3.986a5.941 5.941 0 00-3.986 1.554V9.864a4.983 4.983 0 10-1.993 0v12.157a5.034 5.034 0 102.422.132 3.985 3.985 0 013.557-2.223h3.986a5.979 5.979 0 005.632-4.051 4.982 4.982 0 004.333-4.917z"
            />
          </svg>
          <span className="ml-1">main*</span>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              d="M13.451 6.75h.056c.893 0 1.75.356 2.382.989a3.379 3.379 0 010 4.772 3.364 3.364 0 01-2.382.989h-2.245v-1.125h2.245c.596 0 1.167-.237 1.588-.659a2.253 2.253 0 000-3.182 2.243 2.243 0 00-1.588-.659H12.48l-.14-.964a2.801 2.801 0 00-2.39-2.387 2.788 2.788 0 00-2.94 1.663l-.374.858-.91-.213a2.8 2.8 0 00-.637-.082c-.744 0-1.458.296-1.985.824a2.816 2.816 0 000 3.977c.527.528 1.24.824 1.985.824h2.806V13.5H5.088a3.92 3.92 0 01-2.957-1.306 3.94 3.94 0 012.203-6.502 3.92 3.92 0 011.652.045 3.91 3.91 0 016.346-1.215c.605.601.997 1.383 1.119 2.228zm-1.872 4.335l-1.478-1.478v6.115H8.983V9.648l-1.438 1.437-.795-.795 2.415-2.415h.795l2.415 2.415-.796.795z"
            />
          </svg>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.675 1.125c1.8.112 3.487 1.012 4.725 2.25 1.462 1.575 2.25 3.487 2.25 5.737 0 1.8-.675 3.488-1.8 4.95-1.125 1.35-2.7 2.363-4.5 2.7-1.8.338-3.6.113-5.175-.787-1.575-.9-2.813-2.25-3.488-3.938-.675-1.687-.787-3.6-.225-5.287.563-1.8 1.575-3.263 3.15-4.275 1.463-1.013 3.263-1.463 5.063-1.35zm.562 14.512a6.91 6.91 0 003.825-2.362c.9-1.238 1.463-2.7 1.35-4.275 0-1.8-.675-3.6-1.912-4.838-1.125-1.125-2.475-1.8-4.05-1.912-1.463-.113-3.038.225-4.275 1.125a6.806 6.806 0 00-2.588 3.712c-.45 1.463-.45 3.038.225 4.5.675 1.463 1.688 2.588 3.038 3.376a6.03 6.03 0 004.387.675zm-1.35-7.2l2.7-2.812.788.787-2.7 2.813 2.7 2.813-.788.787-2.7-2.813-2.7 2.813-.787-.787 2.7-2.813-2.7-2.813.787-.787 2.7 2.812z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mx-1">0</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.505 1.125h.99l7.357 13.793-.495.832H1.62l-.495-.832 7.38-13.793zM9 2.565l-6.435 12.06h12.847L9 2.565zM9.703 13.5v-1.125H8.297V13.5h1.406zm-1.406-2.25v-4.5h1.406v4.5H8.297z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">0</span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center gap-1">
          <span className="ml-1">Spaces: 2</span>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center gap-1">
          <span className="ml-1">UTF-8</span>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center gap-1">
          <span className="ml-1">TypeScript JSX</span>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center gap-1">
          <span className="ml-1">Prettier</span>
        </div>
        <div className="relative p-1 px-2 h-full hover:bg-blue-800 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.625 10.012c.113.675.225 1.238.45 1.913l.675 1.912-.563.788H11.25c0 .563-.225 1.125-.675 1.575-.45.45-1.012.675-1.575.675s-1.237-.225-1.575-.675a2.221 2.221 0 01-.675-1.575H2.812l-.562-.787.675-1.913c.225-.9.45-1.8.45-2.7V6.75c0-.787.112-1.575.45-2.25.337-.788.787-1.35 1.35-1.913.563-.562 1.237-.9 2.025-1.125A5.095 5.095 0 019 1.125c-.225.337-.45.788-.675 1.237-.225 0-.45 0-.787.225-.563.113-1.126.45-1.575.9-.45.338-.9.9-1.125 1.463a4.664 4.664 0 00-.338 1.8v2.475c0 1.013-.225 2.025-.45 3.037L3.6 13.5h10.8l-.45-1.238c-.197-.591-.308-1.27-.408-1.883l-.042-.254c.45 0 .787 0 1.125-.113zM9 15.75c.225 0 .563-.113.787-.338.225-.225.338-.45.338-.787h-2.25c0 .338.112.563.338.787.225.225.562.338.787.338zM16.875 4.5a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
