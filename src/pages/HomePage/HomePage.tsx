import ComponentA from "../../components/ComponentA";
import ComponentB from "../../components/ComponentB";
import ComponentC from "../../components/ComponentC";
import { VERSION_INFO_TXT } from "../../config/version-info";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <div>
        <small>{VERSION_INFO_TXT}</small>
      </div>

      <ComponentA />
      <hr />

      <ComponentB />
      <hr />

      <ComponentC />
      <hr />
    </>
  );
}
