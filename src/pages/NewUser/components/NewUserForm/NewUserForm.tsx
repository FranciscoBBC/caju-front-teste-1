import { useForm, Controller } from "react-hook-form";
import Button from "~/components/Buttons";
import TextField from "~/components/TextField";
import { CreateUserForm, createUserFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUser from "~/hooks/useUser";

const NewUserForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserFormSchema),
  });
  const createNewUser = useCreateUser();

  const onSubmitUser = (data: CreateUserForm) => {
    createNewUser.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitUser)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value = "" } }) => (
          <TextField
            id="name"
            placeholder="Nome"
            label="Nome"
            onChange={onChange}
            error={errors.name?.message}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value = "" } }) => (
          <TextField
            id="email"
            placeholder="Email"
            label="Email"
            onChange={onChange}
            type="email"
            error={errors.email?.message}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, value = "" } }) => (
          <TextField
            id="cpf"
            placeholder="CPF"
            label="CPF"
            maxLength={14}
            onChange={(e) => {
              e.target.value = e.target.value.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
              );
              onChange(e);
            }}
            error={errors.cpf?.message}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="admissionDate"
        render={({ field: { onChange, value = "" } }) => (
          <TextField
            id="admissionDate"
            label="Data de admissão"
            onChange={onChange}
            type="date"
            error={errors.admissionDate?.message}
            value={value}
          />
        )}
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default NewUserForm;
