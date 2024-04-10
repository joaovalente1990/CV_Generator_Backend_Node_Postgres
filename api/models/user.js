const Sequelize = require('sequelize');

const sequelize = require('./database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    hashedPassword: Sequelize.STRING,
    cvs: {
        type: Sequelize.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('cvs'));
        }, 
        set: function(val) {
            return this.setDataValue('cvs', JSON.stringify(val));
        }
    }
});

module.exports = User;
