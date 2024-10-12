const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const users = []; // Ensure that users is defined
  const newUser = req.body.user; // This assumes a user object is being passed in the request body
  if (!newUser) {
    return res.status(400).json({ error: "No user data provided" });
  }
  users.push(newUser);
  res.status(200).json(users); // Return the updated users array
});

module.exports = router;
