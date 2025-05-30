import React from 'react';

type Props = {
  setActiveExplorerTab: React.Dispatch<
    React.SetStateAction<
      | 'explorer'
      | 'search'
      | 'git'
      | 'debug'
      | 'extensions'
      | 'user'
      | 'settings'
    >
  >;
};

export default function ActivityBar(props: Props) {
  return (
    <aside className="w-12 flex flex-col justify-between items-center py-2 space-y-2 border-r-2 border-dark_border overflow-y-auto">
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={() => props.setActiveExplorerTab('explorer')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3333 0H11.3333L9.33331 2V8H3.33331L1.33331 10V30.0933L3.33331 32H19.4266L21.3333 30.0933V24H27.5999L29.3333 22.0933V6L23.3333 0ZM23.3333 2.82666L26.5067 6H23.3333V2.82666ZM19.3333 30H3.33331V10H9.33331V22.0933L11.3333 24H19.3333V30ZM27.3333 22H11.3333V2H21.3333V8H27.3333V22Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          onClick={() => props.setActiveExplorerTab('search')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M20.333 0a11 11 0 00-8.24 18.293L1.333 30.507l1.494 1.333L13.56 19.68A11.001 11.001 0 1020.333.013V0zm0 20a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </button>
        <button
          onClick={() => props.setActiveExplorerTab('git')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M28.009 10.962a4.983 4.983 0 10-6.407 4.75 3.985 3.985 0 01-3.558 2.226h-3.986a5.941 5.941 0 00-3.986 1.554V9.864a4.983 4.983 0 10-1.993 0v12.157a5.034 5.034 0 102.422.132 3.985 3.985 0 013.557-2.223h3.986a5.979 5.979 0 005.632-4.051 4.982 4.982 0 004.333-4.917zM6.086 4.983a2.99 2.99 0 115.98 0 2.99 2.99 0 01-5.98 0zm5.98 21.923a2.99 2.99 0 11-5.98 0 2.99 2.99 0 015.98 0zm10.96-12.954a2.99 2.99 0 11.001-5.98 2.99 2.99 0 010 5.98z"
            />
          </svg>
        </button>
        <button
          onClick={() => props.setActiveExplorerTab('debug')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M14.587 18l-1.76 1.76a4.973 4.973 0 00-9.654 0L1.413 18 0 19.413l2.293 2.294L2 22v2H0v2h2v.107c.102.651.286 1.287.547 1.893L0 30.587 1.413 32l2.2-2.2A5.747 5.747 0 008 32a5.746 5.746 0 004.387-2.2l2.2 2.2L16 30.587 13.453 28A7.851 7.851 0 0014 26.067v-.134h2V24h-2v-2l-.293-.293L16 19.413 14.587 18zM8 18a3 3 0 013 3H5a3 3 0 013-3zm4 8a4.44 4.44 0 01-4 4 4.44 4.44 0 01-4-4v-3h8v3zm19.68-13.2v1.68L18 23.16V20.8l11.333-7.16L12 2.667V15.28a6.76 6.76 0 00-2-.96V.84L11.52 0l20.16 12.8z"
            />
          </svg>
        </button>
        <button
          onClick={() => props.setActiveExplorerTab('extensions')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18 2l2-2h10l2 2v10l-2 2H20l-2-2V2zm2 0v10h10V2H20zM0 20V8l2-2h10l2 2v10h10l2 2v10l-2 2H2l-2-2V20zm12-2V8H2v10h10zm0 2H2v10h10V20zm2 10h10V20H14v10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={() => props.setActiveExplorerTab('user')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M32 15.984C32 7.161 24.832 0 16 0S0 7.16 0 15.984c0 4.86 2.208 9.239 5.664 12.18.032.032.064.032.064.064.288.224.576.447.896.671.16.096.288.224.448.352A15.958 15.958 0 0016.032 32c3.328 0 6.4-1.023 8.96-2.75.16-.095.288-.223.448-.319.288-.224.608-.448.896-.671.032-.032.064-.032.064-.064 3.392-2.973 5.6-7.353 5.6-12.212zM16 29.986c-3.008 0-5.76-.959-8.032-2.557.032-.256.096-.512.16-.768.192-.703.48-1.374.832-1.982a7.03 7.03 0 011.28-1.63 8.992 8.992 0 011.632-1.279 8.082 8.082 0 011.952-.799A8.3 8.3 0 0116 20.683a8.37 8.37 0 015.856 2.334 7.99 7.99 0 011.728 2.59c.224.575.384 1.182.48 1.822-2.304 1.598-5.056 2.557-8.064 2.557zm-4.896-14.801a4.98 4.98 0 01-.416-2.046c0-.703.128-1.407.416-2.046a5.673 5.673 0 011.152-1.694 5.68 5.68 0 011.696-1.151A4.995 4.995 0 0116 7.832c.736 0 1.408.128 2.048.416a5.68 5.68 0 011.696 1.15c.48.48.864 1.056 1.152 1.695.288.64.416 1.343.416 2.046 0 .735-.128 1.407-.416 2.046a5.673 5.673 0 01-1.152 1.694 5.68 5.68 0 01-1.696 1.151 5.43 5.43 0 01-4.128 0 5.68 5.68 0 01-1.696-1.15 5.05 5.05 0 01-1.12-1.695zm14.848 10.613c0-.064-.032-.096-.032-.16a10.44 10.44 0 00-1.376-2.813c-.608-.863-1.312-1.63-2.176-2.27-.64-.48-1.344-.895-2.08-1.214a5.64 5.64 0 00.928-.768c.48-.48.896-.99 1.248-1.566a7.384 7.384 0 00.8-1.854c.192-.671.256-1.343.256-2.014 0-1.055-.192-2.046-.576-2.941A7.598 7.598 0 0021.312 7.8a7.69 7.69 0 00-2.4-1.598c-.896-.384-1.888-.576-2.944-.576s-2.048.192-2.944.576c-.896.383-1.728.927-2.4 1.63a7.681 7.681 0 00-1.6 2.398c-.384.895-.576 1.886-.576 2.94 0 .704.096 1.376.288 2.015.192.671.448 1.278.8 1.854.32.575.768 1.087 1.248 1.566.288.288.608.544.96.768-.768.351-1.472.767-2.08 1.246a11.09 11.09 0 00-2.176 2.238 10.002 10.002 0 00-1.376 2.813c-.032.064-.032.128-.032.16-2.528-2.557-4.096-6.01-4.096-9.846C1.984 8.28 8.288 1.982 16 1.982S30.016 8.28 30.016 15.984c0 3.836-1.568 7.289-4.064 9.814z"
            />
          </svg>
        </button>
        <button
          onClick={() => props.setActiveExplorerTab('settings')}
          className="hover:bg-blue-500 p-2 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M18.2 8.8l-1-4.8h-2.4l-1 4.8-1.4.6-4-2.6-1.8 1.6 2.6 4-.4 1.4-4.8 1v2.4l4.8 1 .6 1.6-2.6 4 1.6 1.6 4-2.6 1.6.6.8 4.6h2.4l1-4.8 1.6-.6 4 2.6 1.6-1.6-2.6-4 .6-1.6 4.6-.8v-2.4l-4.8-1-.6-1.6 2.6-4-1.6-1.6-4 2.6-1.4-.4zm.6-6.8l1 4.8L24 4.2l4 4-2.8 4.2 4.8.8v5.6l-4.8 1L28 24l-4 4-4.2-2.8-1 4.8h-5.6l-1-4.8L8 27.8l-4-4 2.8-4.2-4.8-.8v-5.6l4.8-1L4.2 8l4-4 4.2 2.8.8-4.8h5.6zM20 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm-4 2c1.2 0 2-.8 2-2s-.8-2-2-2-2 .8-2 2 .8 2 2 2z"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
