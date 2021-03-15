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

  router.post("/Add", async (req, res) => {
    try {
      console.log(req.body);
      let characterCreated = await characterController.createCharacter(req.body);
      res.send(characterCreated);
    } catch (err) {
      console.log(err);
    }
  });


  router.put('/:id', async (req, res) => {
    try {

      let characterUpdated = await characterController.updateCharacter(req.params.id, req.body);
      res.send(characterUpdated);

    } catch (error) {
      console.log(
        error
      );
    }

  });

  router.delete('/:id', async (req, res) => {
    try {

      let characterDeleted = await characterController.deleteCharacter(req.params.id);
      res.send(characterDeleted);

    } catch (error) {
      console.log(
        error
      );
    }


  });


}

module.exports = characterAPI;