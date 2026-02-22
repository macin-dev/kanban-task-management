export default function InputContainer({ label, children }) {
  return (
    <div>
      <label className="mb-2 inline-block text-[12px] font-bold text-neutral-500">
        {label}
      </label>
      {children}
    </div>
  );
}
