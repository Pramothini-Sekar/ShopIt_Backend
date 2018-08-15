module.exports = {
  up: (queryInterface, Sequelize) =>
   queryInterface.createTable('UserDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  down: (queryInterface, Sequelize) =>  queryInterface.dropTable('UserDetails');

};
