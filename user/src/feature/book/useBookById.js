import { useQuery } from "@tanstack/react-query";
import { getBookById } from "../../service/apiBooks";

export function useBookById(id) {
  const { data: book, isPending } = useQuery({
    queryKey: ["book_by_id", id],
    queryFn: () => getBookById(id),
  });

  return { book, isPending };
}
