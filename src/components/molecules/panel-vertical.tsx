export default function PanelVertical({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[70dvh] w-[33.33%] p-4">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}