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
    throw new ResponseError(402, "Gagal Update data");
  }
};

const detailitem = async (id) => {
    const item = await prismaClient.item.findFirst({
      where: {
        id: Number(id),
      }
    });
    if (!item) {
      throw new ResponseError(402,"Detail item tidak ada");
      
    }
    return item

};
const deleteitem = async (id) => {
  try {
    return await prismaClient.item.delete({
      where: {
        id: Number(id),
      }
    });
  } catch (e) {
    throw new ResponseError(402, "Data yang mau dihapus tidak ada");
  }
};

export default {
  additem,
  updateitem,
  detailitem,
  deleteitem
};
