const express = require('express');
const cors = require('cors');


const app = express();
let corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const db = require("./models")

db.sequelize.sync();

app.get('/', (req, res)=> {
    res.json({message: "Bem vindo em! "});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/leads.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT + ".");
});