import DialogA from "../DialogA";
import TableBase from "../TableBase";
import { DialogComponentProps } from "../TableBase/TableBase";

export type TableAProps = {
  data: string[][];
  title?: string;
};

export default function TableA({ data, title }: TableAProps) {
  const DefaultDialog = ({
    isDialogVisible,
    handleCloseDialog,
  }: DialogComponentProps) => (
    <DialogA
      open={isDialogVisible}
      title={`Dialog da TabelaA | ${title || "-"}`}
      onClose={handleCloseDialog}
    />
  );

  return (
    <TableBase
      data={data}
      title={title}
      dialogComponent={({ isDialogVisible, handleCloseDialog }) => (
        <DefaultDialog
          isDialogVisible={isDialogVisible}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    />

    // Ou implicitamente:
    // <TableBase data={data} title={title} dialogComponent={DefaultDialog} />
  );
}
