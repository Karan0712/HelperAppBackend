const bcrypt = require('bcrypt');

const Helper = {

    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    },


    /* function for compare password with database when user give password at the time of registration */
    comparePassword(hashPassword,password){
        return bcrypt.compareSync(password,hashPassword);
    },

}
module.exports = Helper;