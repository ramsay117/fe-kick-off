import { useQuery } from "@tanstack/react-query";
import getAnimalsClient from "./getAnimalsClient";

function useDetails(id) {
  const detailsQuery = useQuery({
    queryKey: ["details", id],
    queryFn: () => getAnimalsClient.get(`?id=${id}`),
  });

  const details = detailsQuery.data?.data?.pets?.[0] ?? {};

  return [details, detailsQuery.status == "loading"];
}
export default useDetails;
