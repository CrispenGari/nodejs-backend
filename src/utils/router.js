const  express= require("express") ;

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    name: "backend",
    language: "typescript",
    message: "hello world!",
    programmer: "@programer",
    moto: "i'm a programer i have no life!"
  });
});

export default router;
