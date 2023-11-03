const User = require('./User');
const Event = require('./Event');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(Event, {
  foreignKey: 'user_id'
});

module.exports = { User, Event };
