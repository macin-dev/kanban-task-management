import ModalLayout from "./ModalLayout";
import ButtonSecondary from "../Button/ButtonSecondary";
import ButtonPrimarySmall from "../Button/ButtonPrimarySmall";
import InputContainer from "../Input/InputContainer";
import InputText from "../Input/InputText";
import InputOption from "../Input/InputOption";
import Dropdown from "../Input/Dropdown";

const subtasks = ["todo", "doing"];

export default function AddTask() {
  const inputElements = subtasks.map((title) => (
    <InputOption
      key={title}
      name={title}
      id={title}
      placeholder="e.g. Drink cofee and smile"
    />
  ));

  return (
    <ModalLayout title="Add New Task">
      <form className="flex flex-col gap-5">
        <InputContainer label="Tittle">
          <InputText
            name="title"
            id="title"
            placeholder="e.g. Take coffe break"
          />
        </InputContainer>

        <InputContainer label="Description">
          <textarea
            id="description"
            name="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            className="h-28 w-full rounded-sm border border-neutral-500/25 bg-white px-3 py-1.5 text-black placeholder:text-black/25"
          ></textarea>
        </InputContainer>

        <InputContainer label="Subtasks">
          <div className="flex flex-col gap-3">{inputElements}</div>
        </InputContainer>

        <ButtonSecondary text="&#43; Add New Subtasks" />

        <InputContainer label="Status">
          <Dropdown />
        </InputContainer>

        <ButtonPrimarySmall text="Create Task" />
      </form>
    </ModalLayout>
  );
}
