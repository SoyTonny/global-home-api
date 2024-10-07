const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Company = sequelize.define('company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    economic_activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Company;