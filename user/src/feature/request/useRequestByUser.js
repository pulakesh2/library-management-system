import { useQuery } from "@tanstack/react-query";
import { fetchRequestsByUser } from "../../service/apiStudent";

export function useRequestByUser(full_name) {
  const { data: requests = [], isPending } = useQuery({
    queryKey: ["requests_by_user"],
    queryFn: () => fetchRequestsByUser(full_name),
  });

  return { requests, isPending };
}
