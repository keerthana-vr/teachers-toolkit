const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const validUsers = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received:", email, password);

  const isValid = validUsers.some(
    (user) => user.email === email && user.password === password
  );

  if (isValid) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});