import Joi from "joi";

const addItemValidation = Joi.object({
  name: Joi.string()
    .max(100)
    .required()
    .messages({
      "string.base": "Nama harus berupa teks.",
      "string.empty": "Nama tidak boleh kosong.",
      "string.max": "Nama tidak boleh lebih dari 100 karakter.",
      "any.required": "Nama wajib diisi.",
    }),
  description: Joi.string()
    .max(100)
    .required()
    .messages({
      "string.base": "Deskripsi harus berupa teks.",
      "string.empty": "Deskripsi tidak boleh kosong.",
      "string.max": "Deskripsi tidak boleh lebih dari 100 karakter.",
      "any.required": "Deskripsi wajib diisi.",
    }),
});

const updateItemValidation = Joi.object({
  name: Joi.string()
    .max(100)
    .required()
    .messages({
      "string.base": "Nama harus berupa teks.",
      "string.empty": "Nama tidak boleh kosong.",
      "string.max": "Nama tidak boleh lebih dari 100 karakter.",
      "any.required": "Nama wajib diisi.",
    }),
  description: Joi.string()
    .max(100)
    .required()
    .messages({
      "string.base": "Deskripsi harus berupa teks.",
      "string.empty": "Deskripsi tidak boleh kosong.",
      "string.max": "Deskripsi tidak boleh lebih dari 100 karakter.",
      "any.required": "Deskripsi wajib diisi.",
    }),
});

export { addItemValidation, updateItemValidation };
