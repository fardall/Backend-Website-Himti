import { Router } from "express";
import { validateAdmin } from "../../controllers/v1/auth";
import { createUser, getAllUsers, getOneUser_public, getOneUser_protected, updateUserData, changePassword, deleteUser } from "../../controllers/v1/user";

const r = Router();

// * Public
r.get("/:username", getOneUser_public);

// * Protected admin only
r.use(validateAdmin);

r.get("/", getAllUsers);
r.post("/", createUser); // ! register only allowed for admin for now
r.get("/:username/admin", getOneUser_protected);
r.put("/:_id", updateUserData);
r.put("/:username/password", changePassword);
r.delete("/:username", deleteUser);

export { r as userRouterV1 };
