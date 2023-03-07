const sha1 = require('sha1');

const hashPassword = (password) => sha1(password);

export default hashPassword;
