import Link from 'next/link';
import { getBadgeStyle } from './Card';

type Props = {
  title: string;
  repo: string;
  date: string;
  badge: 'open' | 'closed' | 'merged' | undefined;
  type: 'issue' | 'pr';
  url: string;
  description: string;
};

export function FeaturedContribution({
  title,
  repo,
  date,
  badge,
  type,
  url,
  description,
}: Props) {
  const { badgeClass, shadow } = getBadgeStyle(badge, type);

  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block mb-4 w-full border border-neutral-300 bg-white px-6 py-8 shadow-[6px_6px_0_0_var(--tw-shadow-color)] transition-all duration-200 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      style={{ ['--tw-shadow-color' as any]: shadow }}
    >
      <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:justify-between">
        <h2 className="font-mono text-lg text-neutral-800 group-hover:underline">
          {title}
        </h2>
        {badge && (
          <span
            className={`text-xs px-2 py-0.5 uppercase font-semibold rounded ${badgeClass}`}
          >
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:justify-between sm:items-center">
        <span className="italic">{repo}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
