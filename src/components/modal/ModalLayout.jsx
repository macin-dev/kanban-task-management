export default function ModalLayout({ title, children }) {
  return (
    <div className="max-h-full w-full max-w-120 overflow-y-auto rounded-xl bg-white p-5">
      <h4 className="mb-4 text-lg font-bold">{title}</h4>
      {children}
    </div>
  );
}
