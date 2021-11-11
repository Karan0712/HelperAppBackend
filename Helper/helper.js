const bcrypt = require('bcrypt');
const crypto = require ('crypto');

const SECRET = "SECRET_RANDOM_KEY" // TODO:move secreat key to env variables
const cipher = crypto.createCipher("aes256", SECRET);
const decipher = crypto.createCipher("aes256", SECRET);



const Helper = {

    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    },

    /* function for compare password with database when user give password at the time of registration */
    comparePassword(hashPassword,password){
        return bcrypt.compareSync(password,hashPassword);
    },

    encryptMessage(message) {
      let encryptedData = cipher.update(message, "utf-8", "hex") + cipher.final("hex");
      return encryptedData
    },

    dencryptMessage(message) {
      let encryptedData = decipher.update(message, "hex", "utf-8") + decipher.final('utf8');
      return encryptedData
    }
}
module.exports = Helper;
