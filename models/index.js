const User = require('./User');
const Event = require('./Events');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(Event, {
  foreignKey: 'user_id'
});

module.exports = { User, Event };
