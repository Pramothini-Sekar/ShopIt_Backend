module.exports = (sequelize, DataTypes) => {
  const UserDetails = sequelize.define('UserDetails', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Email:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    });
  UserDetails.associate = function(models) {
    // associations can be defined here
  };
  return UserDetails;
};
