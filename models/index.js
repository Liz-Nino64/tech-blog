const User = require("./Users");
const Post = require("./Posts");
const Comment = require("./Comments");

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  // The association can also be created from the Car side
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  module.exports = { User, Comment, Post };
  