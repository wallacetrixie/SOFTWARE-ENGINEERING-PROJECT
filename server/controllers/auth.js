import { db } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//  REGISTER USER
export const register = (req, res) => {
  //   CHECK IF USER EXISTS
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json({ err });
    if (data.length) return res.status(409).json("User already exists");

    // CREATE NEW USER
    // HASHING  THE PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`firstName`, `lastName`, `email`, `password`, `expert`) VALUE (?)";
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      hashedPassword,
      req.body.expert,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(201).json({
        message: "User created successfully!",
        data: data,
      });
    });
  });
};

// LOGGING IN USERS
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json({ err });
    if (!data.length)
      return res.status(401).json({ message: "User not found" });

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_KEY);

    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

// LOGOUT
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({
      message: "User is logged out",
    });
};
