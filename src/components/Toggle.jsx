export default function Toggle({ toggle, onToggle }) {
  return (
    <label
      htmlFor="switchTheme"
      className={`${toggle ? "after:left-[calc(100%-1rem)]" : ""} bg-primary relative h-5 w-10 rounded-full after:absolute after:top-2/4 after:left-0.5 after:h-3.5 after:w-3.5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-all after:duration-150 focus-within:outline-2 focus-within:outline-blue-500 focus-within:outline-solid`}
    >
      <input
        onChange={onToggle}
        className="h-0 w-0"
        type="checkbox"
        id="switchTheme"
      />
    </label>
  );
}
