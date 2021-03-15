const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
mongoose.set("useNewUrlParser", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);


const charactersAPI = require("./routes/CharacterRoutes");
const usersAPI = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//APIs inicialization
charactersAPI(app);
usersAPI(app);

mongoose.connect(
    `mongodb+srv://noctisq:en2VQixW6r7x@J5@cluster0.4qvuc.mongodb.net/RickAndMorty?retryWrites=true&w=majority`
    , () => {
        console.log("connected to db");
    });


app.listen(process.env.PORT || 3000, () => {
    console.log("Escuchando peticiones en el puerto:", 3000);
});