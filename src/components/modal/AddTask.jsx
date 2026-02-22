import { IoMdClose } from "react-icons/io";
import ModalLayout from "./ModalLayout";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";

export default function AddTask() {
  return (
    <ModalLayout>
      <h4 className="mb-4 text-lg font-bold">Add New Task</h4>

      <form className="flex flex-col gap-5">
        <div>
          <label
            className="mb-2 inline-block text-[12px] font-bold text-neutral-500"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Take coffee break"
          />
        </div>

        <div>
          <label
            className="mb-2 inline-block text-[12px] font-bold text-neutral-500"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            className="h-28 w-full rounded-sm border border-neutral-500/25 bg-white px-3 py-1.5 text-black placeholder:text-black/25"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="subtasks"
              className="mb-2 inline-block text-[12px] font-bold text-neutral-500"
            >
              Subtasks
            </label>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-neutral-500">
                <input
                  className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
                  type="text"
                  placeholder="e.g. Make coffee"
                />

                <button type="button">
                  <IoMdClose className="text-lg" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-neutral-500">
                <input
                  className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
                  type="text"
                  placeholder="e.g. Drink coffee & smile"
                />

                <button type="button">
                  <IoMdClose className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          <ButtonSecondary text="&#43; Add New Subtasks" />
        </div>

        <div>
          <label
            className="mb-2 inline-block text-[12px] font-bold text-neutral-500"
            htmlFor="status"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full rounded-sm border border-neutral-500/25 bg-white p-[0.4375em] text-black placeholder:text-black/25"
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>

        <ButtonPrimarySmall text="Create Task" />
      </form>
    </ModalLayout>
  );
}
