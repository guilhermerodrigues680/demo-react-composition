import DialogBase from "../DialogBase/DialogBase";

export type DialogXProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export type MyLocalComponentProps = {
  name: string;
  age: number;
};

function MyLocalComponent({ name, age }: MyLocalComponentProps) {
  return (
    <ul>
      <li>Nome: {name}</li>
      <li>Age: {age}</li>
    </ul>
  );
}

export default function DialogX({ open, onClose, title }: DialogXProps) {
  return (
    <>
      <DialogBase
        {...{ open, onClose, title }}
        externComponent={
          <>
            <MyLocalComponent name="a" age={1} />
          </>
        }
      />
    </>
  );
}
