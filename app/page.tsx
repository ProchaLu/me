export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Lukas Prochazka</h1>
      <div className="flex items-center gap-2 text-black font-mono">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>
        <span>Actively seeking roles: Frontend / Backend / Fullstack</span>
      </div>
    </div>
  );
}
