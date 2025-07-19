import { useQuery } from "@tanstack/react-query";
import { fetchRequests } from "../../service/apiStudent";

export function useRequest() {
  const { data: requests = [], isPending } = useQuery({
    queryKey: ["requests"],
    queryFn: fetchRequests,
  });

  return { requests, isPending };
}
