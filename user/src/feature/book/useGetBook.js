import { useMutation } from "@tanstack/react-query";
import { createBookByStudent } from "../../service/apiStudent";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useGetBook() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (studentData, bookid) =>
      createBookByStudent(studentData, bookid),
    onSuccess: () => {
      toast.success("get request successfull, visit your request page");
      navigate("/request");
    },
    onError: () => toast.error("there is error in our request"),
  });

  return { mutate, isPending };
}
