import { useQuery } from "@tanstack/react-query";
import { getMessage } from "../../service/apiStudent";

export function useMessage(student_name) {
  const { data, isPending } = useQuery({
    queryKey: ["message", student_name],
    queryFn: () => getMessage(student_name),
  });

  return { data, isPending };
}
