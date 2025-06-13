export default function IconHeaderSection({
  props,
  children,
}: {
  props: {
    id: string;
  };
  children: React.ReactNode;
}) {
  return (
    <h2
      id={props.id}
      className="mb-6 mt-12 flex items-center text-2xl font-semibold text-gray-900"
    >
      {children}
    </h2>
  );
}
