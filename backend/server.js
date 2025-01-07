console.log("-----------------------------------------------------------------------------");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();



app.use(cors());
/* for Angular Client (withCredentials) */
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:8081"],
//   })
// );

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./app/models");
const Role = db.role;
const Project = db.project;
const User = db.user;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to alessio's application." });
});

// routes
require("./app/routes")(app);
// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  try {
    // Creazione dei ruoli
    await Role.create({ id: 1, name: "user" });
    await Role.create({ id: 2, name: "moderator" });
    await Role.create({ id: 3, name: "admin" });

    // Creazione di un progetto
    await Project.create({
      title: "Whatsapp",
      subtitle: "_ui-ux design",
      image: "https://i0.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?resize=1024%2C675&ssl=1",
      icon: "R",
      description: "il progetto piu bello del mondo",
    });

    // Creazione di un utente
    const user = await User.create({
      username: "Alessio_carigella",
      email: "caringella.alessio1306@gmail.com",
      password: "Lycia2025", // Assicurati di crittografare la password
    });

    // Recupera il ruolo (ad esempio, 'admin') dal database
    const role = await Role.findByPk(3); // ID del ruolo 'admin'

    // Associa il ruolo all'utente
    if (role) {
      await user.addRole(role); // Metodo generato automaticamente da Sequelize
    }

    console.log("Ruoli, utente e progetto creati con successo!");
  } catch (error) {
    console.error("Errore durante l'inizializzazione dei dati:", error.message);
  }
}

