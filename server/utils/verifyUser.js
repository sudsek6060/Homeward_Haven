import { errorHandler } from "./errorHandler.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) next(errorHandler(403, "user not found"));

    req.user = user;
    next();
  });
};
