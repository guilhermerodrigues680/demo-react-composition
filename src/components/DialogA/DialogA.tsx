export type DialogAProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  externComponent?: JSX.Element;
};

export type DialogAExternComponent = {
  open: boolean;
  title: string;
};

export default function DialogA({
  open,
  onClose,
  title,
  externComponent,
}: DialogAProps) {
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
