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
dotenv.config();

const register = async (request) => {
  const user = validate(registerValidation, request);
  const alreadyRegister = await prismaClient.user.findFirst({
    where: {
      username: user.username,
    },
  });
  if (alreadyRegister) {
    console.info("INI JALAN");
    throw new ResponseError(402, "user sudah ada");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      password: true,
    },
  });
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
  if (user2.token) {
    throw new ResponseError(400, "Token Tidak Kosong");
  }
  
  const tokenjwt = jwt.sign({ username: user.username }, process.env.SUPER_KEY);

  return await prismaClient.user.update({
    where: { username: user.username },
    data: { token: tokenjwt },
    select: {
      username: true,
      token: true,
    },
  });
};
export default {
  register,
  login,
};
