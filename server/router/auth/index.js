import express from "express"
import {register} from "../../controller/auth/index.js";

const router = express.Router();

router.route("/register").post(register)

export default router;