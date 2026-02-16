import express from "express"
import { adddata, deleteuser, editdata, getdata } from "../Controller/Logic.js"
const router = express.Router()

router.route("/add").post(adddata)
router.route("/update/:id").put(editdata)
router.route("/get").get(getdata)
router.route("/delete/:id").delete(deleteuser)

export default router