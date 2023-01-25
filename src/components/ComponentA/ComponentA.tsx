import TableA from "../TableA";

export default function ComponentA() {
  const tableData = [
    ["HA", "HA", "HA"],
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "A", "A"],
  ];

  return (
    <div>
      <h3>ComponentA</h3>

      <TableA data={tableData} />
    </div>
  );
}
