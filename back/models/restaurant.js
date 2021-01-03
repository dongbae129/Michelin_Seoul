module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      star: { type: DataTypes.INTEGER(), allowNull: false },
      foodtype: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Restaurant.associate = (db) => {
    db.Restaurant.hasMany(db.Image);
    db.Restaurant.hasOne(db.DetailInfo);
  };
  return Restaurant;
};
