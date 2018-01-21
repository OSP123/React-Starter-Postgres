'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var Example = sequelize.define('Example', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Example;
};