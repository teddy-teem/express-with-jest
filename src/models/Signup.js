const UserSchema = require("../RDB/UserSchema");
exports.create = async data => {
  await UserSchema.sync({ alter: true });
  return UserSchema.create(data);
};
exports.deleteByEmail = async email => {
  return UserSchema.destroy({ where: { email } });
};
exports.getByEmail = async email => {
  return UserSchema.findOne({ where: { email } });
};
