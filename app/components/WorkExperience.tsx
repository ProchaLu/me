import Image from 'next/image';
import Link from 'next/link';
import IconHeaderSection from './IconHeaderSection';

const experiences = [
  {
    role: 'Full Stack Web Developer',
    company: 'UpLeveled GmbH',
    date: '01/2022 – 06/2025',
    logo: '/logos/upleveled.avif',
    url: 'https://upleveled.io/',
    tasks: [
      'Built and optimized profile pages for students and companies using React and Next.js',
      'Enhanced internal tools and libraries to boost platform performance',
      'Collaborated with designers and product leads to ship intuitive user flows',
      'Wrote unit and end-to-end tests with Jest and Playwright',
      'Mentored over 200 students through code reviews and project guidance',
      'Delivered ~100 live lectures on topics from Node.js to Expo React Native',
    ],
  },
  {
    role: 'Full Stack Web Development Bootcamp',
    company: 'UpLeveled GmbH',
    date: '08/2021 – 12/2021',
    logo: '/logos/upleveled.avif',
    url: 'https://upleveled.io/',
    tasks: [
      'Graduated from an intensive bootcamp focused on modern web development',
      'Strengthened JavaScript, React, and Node.js skills through hands-on projects',
      'Developed an item exchange platform using Next.js, TypeScript, PostgreSQL with Google Maps API and Tailwind CSS',
    ],
  },
  {
    role: 'Business Operations Specialist',
    company: 'Wiener Städtische Versicherung AG',
    date: '01/2010 – 05/2021',
    logo: '/logos/wrstaedtische.avif',
    url: 'https://www.wienerstaedtische.at/',
    tasks: [
      'Managed one of Austria’s top vehicle registration offices',
      'Led B2B and B2C communication, maintaining key client relationships',
      'Oversaw daily operations and team coordination',
      'Implemented process improvements to enhance efficiency and customer satisfaction',
      'Trained and mentored new team members',
    ],
  },
];

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
            className="lucide lucide-person-standing"
          >
            <circle cx="12" cy="5" r="1" />
            <path d="m9 20 3-6 3 6" />
            <path d="m6 8 6 2 6-2" />
            <path d="M12 10v4" />
          </svg>
        </span>
        Work Experience
      </IconHeaderSection>

      <section className="w-full px-4 py-10">
        <div className="relative mx-auto pl-8">
          {experiences.map((experience) => (
            <div
              key={`experience-${experience.company}-${experience.date}`}
              className="relative mb-16 pl-12"
            >
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 bg-white shadow-md">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={24}
                  height={24}
                  className="h-5 w-5 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">{experience.date}</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">
                  {experience.role}{' '}
                  <Link
                    href={experience.url}
                    className="text-cyan-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {experience.company}
                  </Link>
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  {experience.tasks.map((task) => (
                    <li key={`task-${task}`}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
