const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');


class Cv extends Model {}


Cv.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  inputFile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  outputFile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photoFile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobilePhone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  github: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experiences: { 
    type: DataTypes.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('experiences'));
    }, 
    set: function(val) {
        return this.setDataValue('experiences', JSON.stringify(val));
    }
  },
  educations: { 
    type: DataTypes.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('educations'));
    }, 
    set: function(val) {
        return this.setDataValue('educations', JSON.stringify(val));
    }
  },
  skills: { 
    type: DataTypes.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('skills'));
    }, 
    set: function(val) {
        return this.setDataValue('skills', JSON.stringify(val));
    }
  },
  languages: { 
    type: DataTypes.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('languages'));
    }, 
    set: function(val) {
        return this.setDataValue('languages', JSON.stringify(val));
    }
  },
  certificates: { 
    type: DataTypes.STRING, 
    get: function() {
        return JSON.parse(this.getDataValue('certificates'));
    }, 
    set: function(val) {
        return this.setDataValue('certificates', JSON.stringify(val));
    }
  }
}, {
  sequelize,
  modelName: 'Cv',
  tableName: 'cvs',
  timestamps: false
});


module.exports = Cv        