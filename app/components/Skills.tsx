import IconHeaderSection from './IconHeaderSection';

export default function Skills() {
  return (
    <>
      <IconHeaderSection props={{ id: 'skills' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-green-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </span>
        Skills
      </IconHeaderSection>
      <div>test</div>
    </>
  );
}
