import Image from 'next/image';
import Link from 'next/link';
import IconHeaderSection from './IconHeaderSection';

export default function AboutMe() {
  return (
    <>
      <IconHeaderSection props={{ id: 'about-me' }}>
        <span className="relative mr-3 flex h-10 w-10 items-center justify-center">
          <span className="absolute -inset-2 rounded-full bg-cyan-500 blur-[16px] opacity-70" />
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
        About Me
      </IconHeaderSection>
      <section
        id="about"
        className="relative flex w-full flex-col lg:flex-row justify-around gap-8 mx-auto"
      >
        <div className="flex-1 lg:text-left">
          <div>
            I’m a software developer who loves bringing ideas to life through
            code. Problem-solving and building seamless user experiences are
            what drive me every day. Over the years, I’ve worked both
            independently and with diverse teams, learning that great software
            comes from curiosity, collaboration, and a passion for creating
            something meaningful. Outside of coding, I enjoy sports and staying
            active. This helps me to stay focused and energized.
          </div>
          <Link
            className="group mt-2 relative inline-flex h-[48px] w-full items-center justify-center rounded-full bg-cyan-300 px-6 font-medium text-black hover:bg-cyan-500 hover:text-white transition cursor-pointer"
            href="/CV-lukas-prochazka.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV</span>
          </Link>
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
