const Sequelize = require('sequelize');

const sequelize = require('./database');

const CV = sequelize.define('cv', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  inputFile: Sequelize.STRING,
  outputFile: Sequelize.STRING,
  photoFile: Sequelize.STRING,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  mobilePhone: Sequelize.STRING,
  email: Sequelize.STRING,
  github: Sequelize.STRING,
  experiences: { 
    type: Sequelize.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('experiences'));
    }, 
    set: function(val) {
        return this.setDataValue('experiences', JSON.stringify(val));
    }
  },
  educations: { 
    type: Sequelize.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('educations'));
    }, 
    set: function(val) {
        return this.setDataValue('educations', JSON.stringify(val));
    }
  },
  skills: { 
    type: Sequelize.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('skills'));
    }, 
    set: function(val) {
        return this.setDataValue('skills', JSON.stringify(val));
    }
  },
  languages: { 
    type: Sequelize.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('languages'));
    }, 
    set: function(val) {
        return this.setDataValue('languages', JSON.stringify(val));
    }
  },
  certificates: { 
    type: Sequelize.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('certificates'));
    }, 
    set: function(val) {
        return this.setDataValue('certificates', JSON.stringify(val));
    }
  }
});


module.exports = CV        