export default function Dropdown() {
  return (
    <select
      id="status"
      name="status"
      className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
    >
      <option value="todo">Todo</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  );
}
