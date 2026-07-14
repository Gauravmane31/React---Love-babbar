import { useSearchParams } from "react-router-dom";

function Params() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const category = searchParams.get("category");

  return (
    <>
      <h1>ID : {id}</h1>
      <h1>Category : {category}</h1>
    </>
  );
}

export default Params;
