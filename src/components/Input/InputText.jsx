export default function InputText({ placeholder, name, id }) {
  return (
    <input
      className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
