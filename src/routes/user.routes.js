import { Router } from "express"
import { registerUser,loginUser ,logoutUser} from "../controller/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import jwt from "jsonwebtoken"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(registerUser)

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1, 
        }
    ]),registerUser
)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)

export default router 