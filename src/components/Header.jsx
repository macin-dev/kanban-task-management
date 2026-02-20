import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Header({ onMenu }) {
  return (
    <header className="flex items-center gap-4 bg-white p-4">
      <img src="/src/assets/logo.svg" alt="" />

      <div
        onClick={onMenu}
        className="inline-flex shrink-0 items-center gap-1.5"
      >
        <span className="inline-block text-lg font-bold">Platform Launch</span>

        <div className="inline-block">
          <MdKeyboardArrowUp />
        </div>
      </div>

      <div className="ml-auto inline-flex items-center gap-4">
        <div className="bg-primary rounded-3xl px-4 py-2 text-white">
          <HiPlus />
        </div>
        <HiDotsVertical />
      </div>
    </header>
  );
}
