import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async create(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        erros: ["Invalid credentials"],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        erros: ["User not found"],
      });
    }

    const pass = await user.passwordIsValid(password);
    if (!pass) {
      return res.status(401).json({
        erros: ["Invalid password"],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json(`token: ${token}`);
  }
}

export default new TokenController();
