import { IoMdClose } from "react-icons/io";
import InputText from "./InputText";

export default function InputOption({ name, id, placeholder }) {
  return (
    <div className="flex items-center gap-3 text-neutral-500">
      <InputText name={name} id={id} placeholder={placeholder} />
      <button type="button">
        <IoMdClose className="text-lg" />
      </button>
    </div>
  );
}
