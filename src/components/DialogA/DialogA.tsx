import DialogBase from "../DialogBase/DialogBase";

export type DialogAProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function DialogA({ open, onClose, title }: DialogAProps) {
  return (
    <>
      <DialogBase {...{ open, onClose, title }} />
    </>
  );
}
