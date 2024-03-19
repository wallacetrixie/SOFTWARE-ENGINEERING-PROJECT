import { db } from "../connect.js";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ err });
    if (data.length) return res.status(200).json(data);
  });
};
