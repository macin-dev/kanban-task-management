import { IoMdClose } from "react-icons/io";

export default function AddNewBoard() {
  return (
    <div className="w-full max-w-120 rounded-xl bg-white p-5">
      <h4 className="mb-4 text-lg font-bold">Add New Board</h4>

      <form className="flex flex-col gap-5">
        <div>
          <label
            className="mb-2 inline-block text-[12px] font-bold text-neutral-500"
            htmlFor="boardName"
          >
            Board Name
          </label>
          <input
            className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
            type="text"
            name="boardName"
            id="boardName"
            placeholder="e.g. Web design"
          />
        </div>

        <div>
          <label className="mb-2 inline-block text-[12px] font-bold text-neutral-500">
            Board Columns
          </label>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-neutral-500">
              <input
                className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
                type="text"
                placeholder="e.g. Todo"
              />

              <button type="button">
                <IoMdClose className="text-lg" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-neutral-500">
              <input
                className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
                type="text"
                placeholder="e.g. Todo"
              />

              <button type="button">
                <IoMdClose className="text-lg" />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="text-primary bg-primary/10 mt-3 w-full rounded-full py-3.5 text-[0.8125rem] leading-none font-bold"
          >
            &#43; Add New Column
          </button>
        </div>

        <button
          type="submit"
          className="bg-primary rounded-full py-3.5 text-[0.8125rem] leading-none font-bold text-white"
        >
          &#43; Create New Board
        </button>
      </form>
    </div>
  );
}
