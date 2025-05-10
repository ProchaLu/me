type CardProps = {
  title: string;
  description: string;
  tags: string[];
  badge?: string;
  shadowColor?: string;
};

export function Card({
  title,
  description,
  tags,
  badge,
  shadowColor = 'rgba(59,130,246,0.5)',
}: CardProps) {
  return (
    <div
      className="group w-[320px] cursor-pointer border border-neutral-300 bg-white p-4 transition-all duration-200 ease-in-out shadow-[6px_6px_0_0_var(--tw-shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
      style={{ ['--tw-shadow-color' as any]: shadowColor }}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-mono text-sm text-neutral-800">{title}</h2>
        {badge && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 uppercase font-semibold">
            {badge}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-3">{description}</p>

      <div className="flex gap-2 mt-4 text-xs text-gray-700 flex-wrap">
        {tags.map((tag) => (
          <span key={`tag-${tag}`} className="bg-gray-100 px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
