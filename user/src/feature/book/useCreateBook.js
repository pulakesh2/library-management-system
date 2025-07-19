import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "../../service/apiBooks";
import toast from "react-hot-toast";

export function useCreateBook() {
  const queryClient = useQueryClient();

  const { mutate: create, isPending } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success("Created Successfully");
    },

    onError: (error) => {
      toast.error("Could not create");
    },
  });

  return { create, isPending };
}
