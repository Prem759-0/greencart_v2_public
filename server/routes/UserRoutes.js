import express from "express";
import { isAuth, login, logout, register } from "../controllers/UserController.js";
import authUser from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post('/register', register ); // register user

userRouter.post('/login', login ); // login useregister user

userRouter.get('/is-auth', authUser , isAuth ); // check auth

userRouter.get('/logout', authUser , logout ); // logout user

export default userRouter;