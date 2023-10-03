import bcryptjs from "bcryptjs";
import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Name must be between 1 and 255 characters",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              msg: "Invalid email address",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "Password must be between 6 and 50 characters",
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
