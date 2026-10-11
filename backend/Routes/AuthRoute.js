const {SignUp, Login} = require("../Controllers/AuthController")
const { userVerification } = require("../Middlewares/AuthMiddleWare")
const router = require("express").Router()

router.post("/", userVerification)
router.post("/login",Login )
router.post("/signup", SignUp)

module.exports = router