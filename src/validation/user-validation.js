import Joi from "joi";

const registerValidation = Joi.object({
  username: Joi.string().max(100).required().messages({
    "string.empty": "Nama tidak boleh kosong",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password tidak boleh kosong",
    "string.min": "Password minimal 8 karakter",
  }),
});

const loginValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().min(8).required(),
});

export { registerValidation, loginValidation };
