import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CreateUserForm } from "~/pages/NewUser/components/NewUserForm/schema";
import { api } from "~/utils/api";

const createUser = (data: CreateUserForm) =>
  api.post("/registrations", { ...data, status: "REVIEW" });

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: CreateUserForm) => createUser(userData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export default useCreateUser;
