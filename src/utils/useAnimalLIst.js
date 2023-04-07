import { useQuery } from "@tanstack/react-query";
import getAnimalsClient from "./getAnimalsClient";

function useAnimalList(animal) {
  const animalsQuery = useQuery({
    queryKey: [animal],
    queryFn: () => getAnimalsClient.get(`?animal=${animal}`),
  });

  const animalList = animalsQuery.data?.data?.pets ?? [];

  return [animalList, animalsQuery.status == "loading"];
}

export default useAnimalList;
