import { z, ZodString } from "zod";

const requiredString = (fieldName: string): ZodString =>
  z.string({ required_error: `O campo ${fieldName} é obrigatório.` });

export const createUserFormSchema = z.object({
  name: requiredString("Nome").regex(
    /^[a-zA-Z]+\s[a-zA-Z]+$/,
    "Digite um nome válido"
  ),
  email: requiredString("E-mail").refine(
    (value) =>
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com(?:\.[a-zA-Z0-9-]+)*$/.test(
        value.trim() ?? ""
      ),
    "Digite um e-mail válido"
  ),
  cpf: requiredString("CPF")
    .max(14)
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Digite um CPF válido"),
  admissionDate: requiredString("Data de admissão"),
});

export type CreateUserForm = z.infer<typeof createUserFormSchema>;
