export default function ButtonPrimarySmall({ text }) {
  return (
    <button
      type="submit"
      className="bg-primary rounded-full p-3.5 text-[0.8125rem] leading-none font-bold text-white"
    >
      {text}
    </button>
  );
}
