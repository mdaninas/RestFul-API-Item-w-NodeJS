import Joi from "joi";

const registerValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().min(8).required(),
  });


const loginValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().min(8).required(),
  });

export { registerValidation, loginValidation };
