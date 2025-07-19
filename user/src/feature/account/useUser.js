import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/apiAuth";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return { user, isPending, isAuthenticated: user?.role === "authenticated" };
}
