import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BoardItem from "./components/BoardItem";
import Board from "./components/Board";
import BoardContainer from "./components/BoardContainer";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevMenu) => !prevMenu);
  }

  return (
    <section>
      <Header onMenu={handleMenu} />
      <main
        className={`${openMenu ? "relative overflow-y-hidden" : ""} flex h-[calc(100dvh-64px)] bg-neutral-50`}
      >
        <BoardContainer>
          <Board>
            <BoardItem />
            <BoardItem />
            <BoardItem />
          </Board>
        </BoardContainer>

        {openMenu && (
          <div className="absolute top-0 flex h-full w-full items-start justify-center bg-black/50 pt-4">
            <Menu />
          </div>
        )}
      </main>
    </section>
  );
}
