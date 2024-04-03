// /this is a file to create all our user controller functions
import { User } from "../models/userModel.js";

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400).json({ mesage: "user already exists" });
    return;
  }

  await User.create({ fullName: name, email: email, password: password });

  res.status(201).json({ message: "user created " });
  // res.json("welcome to the create user endpoint");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ message: "Invalid credentials" });
  if (!user) {
    res.status(200).json({ success: true });
    return;
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export { createUser, loginUser };
