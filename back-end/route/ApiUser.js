var express = require("express") ;
var router = express.Router();

let users = [
  { id: 25429, firstname: "อุสมาน", lastname: "sulong", password: "1" },
  { id: 25430, firstname: "อามีน", lastname: "วาเด็ง", password: "2" }
];

router
  .route("/")
  // get all user
  .get((req, res) => res.json(users))
  // insert a new bear
  .post((req, res) => {
    var user = {};
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.password = req.body.password;
    users.push(user);
    res.json({ message: "user created!" });
  });

router
  .route("/:user_id")
  // get a user
  .get((req, res) => {
    console.log("ASDASD", req.params);

    let id = req.params.user_id;
    let index = users.findIndex(user => user.id === +id);
    res.json(users[index]);
  })

  // Update a user
  .put((req, res) => {
    let id = req.params.user_id;
    let index = users.findIndex(user => user.id === +id);
    bears[index].firstname = req.body.firstname;
    bears[index].lastname = req.body.lastname;
    bears[index].password = req.body.password;
    res.json({ message: "User updated!" + req.params.user_id });
  })

  // Delete a user
  .delete((req, res) => {
    let id = req.params.user_id;
    let index = users.findIndex(user => user.id === +id);
    users.splice(index, 1);
    res.json({ message: "User deleted: " + req.params.user_id });
  });

  
module.exports = router;