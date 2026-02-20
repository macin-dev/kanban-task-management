export default function ButtonSecondary({ text }) {
  return (
    <button
      type="button"
      className="text-primary bg-primary/10 rounded-full p-3.5 text-[0.8125rem] leading-none font-bold"
    >
      {text}
    </button>
  );
}
