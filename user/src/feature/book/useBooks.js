import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../service/apiBooks";
import { useSearchParams } from "react-router-dom";

export function useBooks() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
  const { data: books = [], isPending } = useQuery({
    queryKey: ["books", filter],
    queryFn: () => fetchBooks({ filter }),
  });

  return { books, isPending };
}
