const Vote = require('./vote');
const User = require('./User');
const Post = require('./Post');

// create associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

// With these two .belongsToMany() methods in place, we're allowing both the User and Post models to query each other's information in the context of a vote
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  }); 

Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote };
