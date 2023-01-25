import DialogX from "../DialogX";
import TableX from "../TableX";

export default function ComponentC() {
  const tableData = [
    ["HC", "HC", "HC"],
    ["C", "C", "C"],
    ["C", "C", "C"],
    ["C", "C", "C"],
  ];

  return (
    <div>
      <h3>ComponentC</h3>

      <TableX
        data={tableData}
        dialogComponent={({ isDialogVisible, handleCloseDialog }) => (
          <DialogX
            onClose={() => {
              console.log("evento onClose aqui");
              handleCloseDialog();
            }}
            open={isDialogVisible}
            title="Titulo vindo do ComponentC"
          />
        )}
      />
    </div>
  );
}
