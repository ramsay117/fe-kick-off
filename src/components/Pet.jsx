import { useState } from "react";
import useAnimalList from "../utils/useAnimalLIst";
import Details from "./Details";

function Pet({ animal }) {
  const [animalList, loading] = useAnimalList(animal);
  const [showIds, setshowIds] = useState([]);
  function handleImages(id) {
    if (showIds.indexOf(id) == -1) setshowIds([...showIds, id]);
    else setshowIds(showIds.filter((showId) => showId !== id));
  }
  return !animal ? (
    <div>Select Pet</div>
  ) : loading ? (
    <div>loading..</div>
  ) : (
    <div>
      {animalList.map((each) => (
        <div key={each.name}>
          <div onClick={() => handleImages(each.id)}>{each.name} +</div>
          {showIds.indexOf(each.id) != -1 && <Details id={each.id} />}
        </div>
      ))}
    </div>
  );
}
export default Pet;
