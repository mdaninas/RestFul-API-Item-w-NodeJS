import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

import {
  addItemValidation,
  updateItemValidation,
} from "../validation/item-validation.js";
import { validate } from "../validation/validation.js";

const additem = async (req, user) => {
  const result = validate(addItemValidation, req);
  return await prismaClient.item.create({
    data: {
      name: result.name,
      description: result.description,
      id_user: user.id,
    },
  });
};

const updateitem = async (id, req) => {
  const result = validate(updateItemValidation, req);
  try {
    return await prismaClient.item.update({
      where: {
        id: Number(id.id),
      },
      data: result,
    });
  } catch (e) {
    throw new ResponseError(402, "Gagal Update nih");
  }
};

export default {
  additem,
  updateitem,
};
