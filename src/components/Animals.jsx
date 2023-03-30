import { useEffect } from "react";
import useAnimalList from "../utils/useAnimalLIst";

function Animals({ animal }) {
  const [animalList, loading] = useAnimalList(animal);
  console.log(animalList);
  return loading ? (
    <div>loading..</div>
  ) : (
    <div>
      {animalList.map((each, idx) => (
        <div key={idx}>{each.name}</div>
      ))}
    </div>
  );
}
export default Animals;
