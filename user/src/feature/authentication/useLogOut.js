import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../service/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("succesfully log out!");
      navigate("/signin", { replace: true });
    },
    onError: () => toast.error("there is a problem to log out"),
  });

  return { mutate, isPending };
}
