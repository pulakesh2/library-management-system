import toast from "react-hot-toast";
import { updateUser } from "../../service/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate, isPending: isUpdating } = useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      toast.success("User account successfully updated");
      // queryClient.setQueryData("user", user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (error) => {
      toast.error("Error updating User:", error);
    },
  });

  return { mutate, isUpdating };
}
