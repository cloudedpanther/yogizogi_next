export default function Collapse({
  title,
  open = false,
  children,
}: {
  title: string;
  open?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <details className="collapse collapse-arrow bg-base-100 shadow" open={open}>
      <summary className="collapse-title text-lg font-bold !flex gap-2">
        <div className="w-1 h-6 bg-blue-400 mt-[2px]"></div>
        <p>{title}</p>
      </summary>
      <div className="collapse-content flex flex-col gap-4">{children}</div>
    </details>
  );
}
