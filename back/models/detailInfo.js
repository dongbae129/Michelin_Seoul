module.exports = (sequelize, DataTypes) => {
  const DetailInfo = sequelize.define(
    "DetailInfo",
    {
      description: {
        type: DataTypes.TEXT(),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      phonenumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      weekday: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      weekend: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  DetailInfo.associate = (db) => {
    db.DetailInfo.belongsTo(db.Restaurant);
  };
  return DetailInfo;
};
