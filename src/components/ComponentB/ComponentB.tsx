import TableA from "../TableA";

export default function ComponentB() {
  const tableData = [
    ["HB", "HB", "HB"],
    ["B", "B", "B"],
    ["B", "B", "B"],
    ["B", "B", "B"],
  ];

  return (
    <div>
      <h3>ComponentB</h3>

      <TableA data={tableData} title="Tabela do ComponentB" />
    </div>
  );
}
