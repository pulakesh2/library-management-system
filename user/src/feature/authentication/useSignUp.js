import { useMutation } from "@tanstack/react-query";
import { signup } from "../../service/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("account successfully created!");
      navigate("/signin");
    },

    // onError: () => toast.error("there is a problem to create your account"),
  });

  return { mutate, isPending };
}
