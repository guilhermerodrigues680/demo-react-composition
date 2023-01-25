import { ReactNode } from "react";

export type DialogBaseProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  externComponent?: ReactNode;
};

export type ExternComponentProps = {
  name: string;
  age: number;
};

export default function DialogBase({
  open,
  onClose,
  title,
  externComponent,
}: DialogBaseProps) {
  function handleClickClose() {
    onClose();
  }

  return (
    <dialog open={open}>
      <div>
        <button type="button" onClick={handleClickClose}>
          &times;
        </button>
      </div>

      <h3>{title}</h3>
      {externComponent}
    </dialog>
  );
}
