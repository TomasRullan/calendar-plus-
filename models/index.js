const User = require('./User');
const Calendar = require('./Calendar');

User.hasMany(Calendar, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Calendar.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Calendar };
