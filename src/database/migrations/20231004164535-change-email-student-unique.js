module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn("students", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down() {},
};
