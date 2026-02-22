import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";
import ButtonSecondary from "../Button/ButtonSecondary";
import ModalLayout from "./ModalLayout";
import InputText from "../Input/InputText";
import InputOption from "../Input/InputOption";
import InputContainer from "../Input/InputContainer";

const broadColumns = ["todo", "doing", "done"];

export default function AddNewBoard() {
  const inputList = broadColumns.map((title) => (
    <InputOption key={title} name={title} id={title} placeholder="e.g. Todo" />
  ));

  return (
    <ModalLayout title="Add New Board">
      <form className="flex flex-col gap-5">
        <InputContainer label="Board">
          <InputText name="board" id="board" placeholder="e.g. Web design" />
        </InputContainer>

        <InputContainer label="Board Columns">
          <div className="flex flex-col gap-3">{inputList}</div>
        </InputContainer>

        <ButtonSecondary text="&#43; Add New Column" />
        <ButtonPrimarySmall text="&#43; Create New Board" />
      </form>
    </ModalLayout>
  );
}
