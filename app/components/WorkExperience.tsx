import Image from 'next/image';
import IconHeaderSection from './IconHeaderSection';

export default function WorkExperience() {
  return (
    <>
      <IconHeaderSection props={{ id: 'work-experience' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-purple-500 blur-[16px] opacity-70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-person-standing-icon lucide-person-standing"
          >
            <circle cx="12" cy="5" r="1" />
            <path d="m9 20 3-6 3 6" />
            <path d="m6 8 6 2 6-2" />
            <path d="M12 10v4" />
          </svg>
        </span>
        Work Experience
      </IconHeaderSection>
      <section
        id="about"
        className="relative flex w-full flex-col lg:flex-row justify-around gap-8 mx-auto"
      >
        <div className="flex-1 lg:text-left">
          I’m a software developer who loves bringing ideas to life through
          code. Problem-solving and building seamless user experiences are what
          drive me every day. Over the years, I’ve worked both independently and
          with diverse teams, learning that great software comes from curiosity,
          collaboration, and a passion for creating something meaningful.
          Outside of coding, I enjoy sports and staying active. This helps me to
          stay focused and energized.
          <div className="mt-6">
            <h3 className="relative mb-4 mt-4 inline-block text-lg font-semibold text-gray-900">
              <span className="relative z-10">Languages</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-cyan-500 opacity-40 rounded" />
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-300 px-4 py-1 text-m font-medium shadow-sm">
                🇩🇪 German (Native)
              </span>
              <span className="rounded-full bg-cyan-300 px-4 py-1 text-m font-medium shadow-sm">
                🇬🇧 English
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1 max-w-sm">
          <Image
            src="/me.avif"
            alt="Comic illustration of Lukas Prochazka"
            width={400}
            height={400}
          />
        </div>
      </section>
    </>
  );
}
