import { z, ZodString } from "zod";

const requiredString = (fieldName: string): ZodString =>
  z.string({ required_error: `O campo ${fieldName} é obrigatório.` });

export const createUserFormSchema = z.object({
  name: requiredString("Nome"),
  email: requiredString("E-mail"),
  cpf: requiredString("CPF"),
  admissionDate: requiredString("Data de admissão"),
});

export type CreateUserForm = z.infer<typeof createUserFormSchema>;
