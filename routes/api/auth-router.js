import express from "express";
import usersSchemas from "../../schemas/users-schemas.js";
import { validateBody } from "../../decorators/index.js";
import { register, login } from "../../controllers/users/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userSignupSchema),
  register.register
);

authRouter.post(
  "/login",
  validateBody(usersSchemas.userSigninSchema),
  login.login
);

export default authRouter;
