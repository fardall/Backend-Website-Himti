import { Router } from "express";
import { validateForumMod } from "../../controllers/v1/auth";
import * as cForum from "../../controllers/v1/forum";

const r = Router();

// * protected forummod only
r.post("/category", validateForumMod, cForum.createForumCategory);
r.put("/category/:_id", validateForumMod, cForum.updateForumCategory);
r.delete("/category/:_id", validateForumMod, cForum.deleteForumCategory);

// * public
r.get("/category", cForum.getAllForumCategories);
r.get("/category/:name", cForum.getOneForumCategory);
r.get("/by/category/:name", cForum.getForumsByCategoryName);
r.get("/", cForum.getAllForums);
r.get("/:_id", cForum.getOneForum);
r.get("/:_id/full", cForum.getOneForumAndItsComments);

// * protected forummod only
r.use(validateForumMod);
r.post("/", cForum.createForum);
r.put("/:_id", cForum.updateForum);
r.delete("/:_id", cForum.deleteForum);

export { r as forumRouterV1 };
