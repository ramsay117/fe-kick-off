import { useEffect, useState } from "react";

function useAnimalList(animal) {
  const [loading, setLoading] = useState(false);
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setAnimalList([]);
    } else {
      requestList();
    }
  }, [animal]);

  async function requestList() {
    setLoading(true);
    setAnimalList([]);
    const res = await fetch(
      `${import.meta.env.VITE_ANIMAL_LIST_URL}?animal=${animal}`
    );
    const data = await res.json();
    setLoading(false);
    setAnimalList(data.pets);
  }
  return [animalList, loading];
}

export default useAnimalList;
