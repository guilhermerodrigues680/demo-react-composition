import { useState } from "react";
import DialogA from "../DialogA";

export type TableAProps = {
  data: string[][];
  title?: string;
};

export default function TableA({ data, title }: TableAProps) {
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

      <DialogA
        open={isDialogVisible}
        title={`Dialog da TabelaA | ${title || "-"}`}
        onClose={handleCloseDialog}
      />
    </>
  );
}
