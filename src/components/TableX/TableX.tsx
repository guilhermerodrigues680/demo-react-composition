import { ReactNode } from "react";
import TableBase from "../TableBase";
import { DialogComponentProps } from "../TableBase/TableBase";

export type TableXProps = {
  data: string[][];
  title?: string;
  dialogComponent: (props: DialogComponentProps) => ReactNode;
};

export default function TableX({ data, title, dialogComponent }: TableXProps) {
  return (
    <TableBase data={data} title={title} dialogComponent={dialogComponent} />
  );
}
