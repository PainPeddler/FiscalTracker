<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('Users', {
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
    
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

// Hashing the user's password before it's saved to DB
User.beforeCreate((users, options) => {
    // hash the user's password with 10 rounds of salt
    return bcrypt.hash(users.password, 10)
        .then(hash => {
            users.password = hash;
        })
        .catch(err => {
            throw new Error(err);
        });
});

module.exports = User;
=======
>>>>>>> parent of 2d771bb (Made users model and hashed password before it is saved to DB)
