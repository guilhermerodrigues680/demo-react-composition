import TableA from "../TableA";

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

      <TableA data={tableData} />
    </div>
  );
}
