const getF1 = name => "hello " + getF2(name);
const getF2 = name => `${name}, how are u?`;

module.exports = { getF1, getF2 };
