import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Email format is invalid').required("Email is required"),
  password: yup
    .string()
    .min(5, "Password is too short!")
    .max(20, "Password is too long")
    .required(),
});
