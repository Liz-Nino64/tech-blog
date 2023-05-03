const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id",
              },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },
    },
)

module.exports = { Post }