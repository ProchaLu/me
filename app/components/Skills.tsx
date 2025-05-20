import IconHeaderSection from './IconHeaderSection';

export default function Skills() {
  return (
    <>
      <IconHeaderSection props={{ id: 'tech-stack' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-green-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal"
          >
            <line x1="21" x2="14" y1="4" y2="4" />
            <line x1="10" x2="3" y1="4" y2="4" />
            <line x1="21" x2="12" y1="12" y2="12" />
            <line x1="8" x2="3" y1="12" y2="12" />
            <line x1="21" x2="16" y1="20" y2="20" />
            <line x1="12" x2="3" y1="20" y2="20" />
            <line x1="14" x2="14" y1="2" y2="6" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="16" x2="16" y1="18" y2="22" />
          </svg>
        </span>
        Skills
      </IconHeaderSection>
      <p className="mb-4 text-gray-600">
        My core tech stack is built around modern JavaScript tooling. These are
        the technologies I rely on to architect scalable applications, deliver
        high-performance user experiences, and ship production-ready code.
      </p>
    </>
  );
}
