const express = require("express");
const CharacterController = require("../controllers/CharacterController");

function characterAPI(app) {
  const router = express.Router();
  app.use("/api/Characters", router);
  const characterController = new CharacterController();

  router.get("/", async function (req, res, next) {
    try {
      let characters = await characterController.getAllCharacters();
      res.send(characters);
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/Add", async (req) => {
    try{
        console.log(req.body);
        let characterCreated = await characterController.createCharacter();
        res.send(characterCreated);
    }catch (err){
        console.log(err);
    }
  })

  
}

module.exports = characterAPI;