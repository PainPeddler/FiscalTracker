const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

// Hashing the user's password before it's saved to DB
Users.beforeCreate((users, options) => {
    // hash the user's password with 10 rounds of salt
    return bcrypt.hash(users.password, 10)
        .then(hash => {
            users.password = hash;
        })
        .catch(err => {
            throw new Error(err);
        });
});

module.exports = Users;