const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
mongoose.set("useNewUrlParser", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);


const charactersAPI = require("./routes/CharacterRoutes");
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }))
//APIs inicialization
charactersAPI(app);

mongoose.connect(
    `mongodb+srv://noctisq:en2VQixW6r7x@J5@cluster0.4qvuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { dbName: `RickAndMorty` }
    , () => {
        console.log("connected to db");
});


app.listen(3000,  () =>{
    console.log("Escuchando peticiones en el puerto:", 3000);
});