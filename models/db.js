// Import the Sequelize library
const { Sequelize } = require( 'sequelize' );

// Import the dotenv library
const dotenv = require( 'dotenv' );

dotenv.config();

// Create a new Sequelize object and connect to the database using environment variables

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

modules.exports = sequelize;