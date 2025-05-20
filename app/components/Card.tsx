type Props = {
  title: string;
  repo: string;
  date: string;
  badge: 'open' | 'closed' | 'merged' | undefined;
  type: 'issue' | 'pr';
  url: string;
};

export function getBadgeStyle(
  badge: 'open' | 'closed' | 'merged' | undefined,
  type: 'issue' | 'pr' | undefined,
) {
  if (type === 'issue') {
    if (badge === 'open') {
      return {
        badgeClass: 'bg-[#dafbe1] text-[#1a7f37]',
        shadow: 'rgba(46,164,79,0.5)',
      };
    }
    if (badge === 'closed') {
      return {
        badgeClass: 'bg-[#e9d8fd] text-[#8250df]',
        shadow: 'rgba(130,80,223,0.5)',
      };
    }
  }

  if (type === 'pr') {
    if (badge === 'open') {
      return {
        badgeClass: 'bg-[#dafbe1] text-[#1a7f37]',
        shadow: 'rgba(46,164,79,0.5)',
      };
    }
    if (badge === 'closed') {
      return {
        badgeClass: 'bg-[#ffebe9] text-[#cf222e]',
        shadow: 'rgba(207,34,46,0.5)',
      };
    }
    if (badge === 'merged') {
      return {
        badgeClass: 'bg-[#e9d8fd] text-[#8250df]',
        shadow: 'rgba(130,80,223,0.5)',
      };
    }
  }

  return {
    badgeClass: 'bg-gray-100 text-gray-800',
    shadow: 'rgba(107,114,128,0.5)',
  };
}

export function Card({ title, repo, date, badge, type, url }: Props) {
  const { badgeClass, shadow } = getBadgeStyle(badge, type);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group w-[320px] block cursor-pointer border border-neutral-300 bg-white p-4 transition-all duration-200 ease-in-out shadow-[6px_6px_0_0_var(--tw-shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
      style={{ ['--tw-shadow-color' as any]: shadow }}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-mono text-sm text-neutral-800 group-hover:underline">
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

      <p className="text-sm text-gray-600 mt-2">{repo}</p>

      <div className="mt-4 text-xs text-gray-500">
        {new Date(date).toLocaleDateString()}
      </div>
    </a>
  );
}
