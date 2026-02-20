import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BoardItem from "./components/BoardItem";
import Board from "./components/Board";
import BoardContainer from "./components/BoardContainer";
import AddNewBoard from "./components/modal/AddNewBoard";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleMenu() {
    setOpenMenu((prevMenu) => !prevMenu);
  }

  function handleModal() {
    setOpenModal((prevModal) => !prevModal);
    setOpenMenu(false);
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
            <Menu onModal={handleModal} />
          </div>
        )}
      </main>

      {openModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4">
          <AddNewBoard />
        </div>
      )}
    </section>
  );
}
