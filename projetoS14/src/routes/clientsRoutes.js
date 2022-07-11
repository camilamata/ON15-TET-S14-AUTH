const express = require("express");

const controller = require("../controllers/clientsControllers");
const authController = require("../controllers/authController");

const router = express.Router();

//Rota que acessa o atleta pelo nome | GET
router.get("/accessByName", controller.getByName);
//Rota que acessa todos os atletas que frequentam um dia da semana | GET
router.get("/dayPreference", controller.weekdayAttendance)


//Rota que cadastra um novo atleta:
router.post("/registerAthlet", controller.register);

router.post("/login", authController.login)

//Exportando o routes
module.exports = router