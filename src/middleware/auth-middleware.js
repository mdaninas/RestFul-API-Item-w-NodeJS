import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { prismaClient } from "../application/database.js";

import { ResponseError } from "../error/response-error.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.get("Authorization");
    if (!token) {
      return res
        .status(400)
        .json({
          message: "Unauthorized woi",
        })
        .end();
    }
    const decoded = jwt.verify(token, process.env.SUPER_KEY);

    req.user = {
      id: decoded.id,
      username: decoded.username,
    };
    const dbuser = await prismaClient.user.findFirst({
      where: {
        username: decoded.username,
      },
    });
    if (!dbuser || dbuser.username !== decoded.username) {
      return res
        .status(401)
        .json({ message: "Tidak ada user dengan token tersebut" })
        .end();
    }
    next();
  } catch (error) {
    error.status = 400
    next(new ResponseError(error.status, error.message));
  }
};

export { authMiddleware };
