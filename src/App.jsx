import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevMenu) => !prevMenu);
  }

  return (
    <section>
      <Header onMenu={handleMenu} />
      <main
        className={`${openMenu ? "relative h-[calc(100dvh-64px)] overflow-y-hidden" : ""} `}
      >
        <h1>Content</h1>

        {openMenu && (
          <div className="absolute top-0 flex h-full w-full items-start justify-center bg-black/50 pt-4">
            <Menu />
          </div>
        )}
      </main>
    </section>
  );
}
