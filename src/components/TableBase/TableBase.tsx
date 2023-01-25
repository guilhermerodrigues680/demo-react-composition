import { ReactElement, ReactNode, useState } from "react";
import DialogA from "../DialogA";

export type TableBaseProps = {
  data: string[][];
  title?: string;
  dialogComponent: (props: DialogComponentProps) => ReactNode;
};

export type DialogComponentProps = {
  isDialogVisible: boolean;
  handleCloseDialog: () => void;
};

export default function TableBase({
  data,
  title,
  dialogComponent,
}: TableBaseProps) {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  function handleClickOpenDialog() {
    setIsDialogVisible(true);
  }

  function handleCloseDialog() {
    setIsDialogVisible(false);
  }

  return (
    <>
      <table>
        {title && <caption>{title}</caption>}

        <thead>
          <tr>
            {data?.[0].map((txt, i) => (
              <th key={i}>{txt}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((txt, j) => (
                <td key={j}>{txt}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={handleClickOpenDialog}>
        Abrir Dialog
      </button>

      {dialogComponent({ handleCloseDialog, isDialogVisible })}
    </>
  );
}
