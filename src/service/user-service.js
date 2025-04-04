import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { logger } from "../application/logging.js";
dotenv.config();

const register = async (request) => {
  const user = validate(registerValidation, request);
  const alreadyRegister = await prismaClient.user.findFirst({
    where: {
      username: user.username,
    },
  });
  if (alreadyRegister) {
    throw new ResponseError(402, "user sudah ada");
  }
  user.password = await bcrypt.hash(user.password, 10);
  const hasil = await prismaClient.user.create({
    data: user,
    select: {
      id: true,
      username: true,
    },
  });
  return hasil;
};

const login = async (request) => {
  const user = validate(loginValidation, request);
  const user2 = await prismaClient.user.findFirst({
    where: { username: user.username },
  });
  if (!user2) {
    throw new ResponseError(400, "User Tidak Terdaftar");
  }
  const isPasswordValid = await bcrypt.compare(user.password, user2.password);
  if (!isPasswordValid) {
    throw new ResponseError(400, "Password Salah");
  }
  const tokenjwt = jwt.sign(
    { id: user2.id, username: user.username },
    process.env.SUPER_KEY
  );
  return {
    id: user2.id,
    name: user2.username,
    token: tokenjwt,
  };
};

export default {
  register,
  login,
};
