const express = require("express");
const usersController = require("../controllers/UserController");

function usersAPI(app) {
  const router = express.Router();
  app.use("/api/Users", router);
  const userController = new usersController();


  //Get ALl users
  router.post("/login", async function (req, res, next) {
    try {
      console.log(req.body);
      let user = await userController.registerUser(req.body);
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  });


  router.post("/auth", async (req, res) => {
    try {
      console.log(req.body);
      await userController.authUser(req.body, res);

    } catch (err) {

    }
  })


  router.get("/getOne", async (req) => {
    try {

    } catch (err) {

    }
  })



}

module.exports = usersAPI;