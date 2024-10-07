const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Employee = sequelize.define('employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    register_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Employee;