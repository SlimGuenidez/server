const express = require("express");
const adminRoutes = require('./routes/admin.routes');
// const userRoutes = require('./routes/user.routes');

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000
var cors=require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use('/api/admin', adminRoutes);
app.use("/api/user", userRoutes);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 *Slim : Events/getAll 
 */






///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Youssef : Events/add 
app.post("/addEvent", (req, res) => {
  items.addEvent(title, description, date, image, type, (err, events) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(events)
    }
  })
})








///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//Youssef : Events/delete
// app.delete("/deleteEvent", (req, res) => {
//   items.deleteEvent(id, (err, events) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       res.json(events)
//     }
//   })
// })








///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//  Youssef : Events/put
// app.modif("/deleteEvent", (req, res) => {
//   items.modifEvent(id, (err, events) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       res.json(events)
//     }
//   })
// })







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/getAll
 */







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/remove
 */







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
