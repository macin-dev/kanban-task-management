import { IoMdClose } from "react-icons/io";
import ModalLayout from "./ModalLayout";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";

export default function EditBoard() {
  return (
    <ModalLayout>
      <h4 className="mb-4 text-lg font-bold">Edit Board</h4>

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

        <div className="flex flex-col gap-3">
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
                  placeholder="e.g. Doing"
                />

                <button type="button">
                  <IoMdClose className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          <ButtonSecondary text="&#43; Add New Column" />
        </div>

        <ButtonPrimarySmall text="Save Changes" />
      </form>
    </ModalLayout>
  );
}
