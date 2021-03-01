const express = require("express");
const usersController = require("../controllers/UserController");

function usersAPI(app) {
  const router = express.Router();
  app.use("/api/Users", router);
  const userController = new usersController();


  //Get ALl users
  router.get("/", async function (req, res, next) {
    try {
      
    } catch (err) {
     
    }
  });

  router.post("/Add", async (req) => {
    try{
        
    }catch (err){
    }
  })

  router.put("/update", async (req) => {
    try{
       
    }catch (err){
        
    }
  })

  router.post("/delete", async (req) => {
    try{
        
    }catch (err){
        
    }
  })


  router.get("/getOne", async (req) => {
    try{
    
    }catch (err){
        
    }
  })


  
}

module.exports = usersAPI;