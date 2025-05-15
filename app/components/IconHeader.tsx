export default function IconHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      id="contactme"
      className="mb-6 flex items-center text-2xl font-semibold text-gray-900"
    >
      {children}
    </h2>
  );
}
