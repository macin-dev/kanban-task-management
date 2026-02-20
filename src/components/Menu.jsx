import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { TbLayoutBoardSplit } from "react-icons/tb";
import Toggle from "./Toggle";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full max-w-66 rounded-lg bg-white pt-3 pr-5 pb-4">
      <h3 className="mb-4 pl-5 text-xs font-bold tracking-[2.4px] text-neutral-500 uppercase">
        All boards (3)
      </h3>

      <ul>
        <li className="bg-primary flex items-center gap-4 rounded-tr-4xl rounded-br-4xl py-3 pl-5 font-bold text-white">
          <TbLayoutBoardSplit /> Platform Launch
        </li>
        <li className="flex items-center gap-4 rounded-tr-4xl rounded-br-4xl py-3 pl-5 font-bold text-neutral-500">
          <TbLayoutBoardSplit /> Marketing Plan
        </li>
        <li className="flex items-center gap-4 rounded-tr-4xl rounded-br-4xl py-3 pl-5 font-bold text-neutral-500">
          <TbLayoutBoardSplit /> Roadmap
        </li>
      </ul>

      <button
        type="button"
        className="text-primary flex w-full items-center gap-4 py-3 pl-5 font-bold"
      >
        <TbLayoutBoardSplit />
        <span className="inline-flex items-center gap-1">
          &#43; Create New Board
        </span>
      </button>

      <div className="mt-6 ml-3 flex items-center justify-center gap-5 rounded-lg bg-neutral-50 py-3 text-neutral-500">
        <IoMdSunny />
        <Toggle
          toggle={toggle}
          onToggle={() => setToggle((prevToggle) => !prevToggle)}
        />
        <BsFillMoonStarsFill />
      </div>
    </div>
  );
}
