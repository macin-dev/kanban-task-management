import { IoMdClose } from "react-icons/io";
import ModalLayout from "./ModalLayout";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";
import InputContainer from "../Input/InputContainer";
import InputText from "../Input/InputText";
import InputOption from "../Input/InputOption";

const broadColumns = ["todo", "doing", "done"];

export default function EditBoard() {
  const inputElements = broadColumns.map((title) => (
    <InputOption key={title} name={title} id={title} placeholder="e.g. Todo" />
  ));

  return (
    <ModalLayout title="Edit Board">
      <form className="flex flex-col gap-5">
        <InputContainer label="Board Name">
          <InputText
            name="boardName"
            id="boardName"
            placeholder="e.g. Web design"
          />
        </InputContainer>

        <InputContainer label="Board Columns">
          <div className="flex flex-col gap-3">{inputElements}</div>
        </InputContainer>

        <ButtonSecondary text="&#43; Add New Column" />
        <ButtonPrimarySmall text="Save Changes" />
      </form>
    </ModalLayout>
  );
}
