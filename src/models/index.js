'use strict';

var fs = require('fs');
var path = require('path');

export default class Models {

  constructor(sequelize) {

    var db = {};

    fs
      .readdirSync(__dirname)
      .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
      })
      .forEach((file) => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
      });

    Object.keys(db).forEach((modelName) => {
      if ('associate' in db[modelName]) {
        db[modelName].associate(db);
      }
    });

    this.db = db;
    this.db.sequelize = sequelize;

  }

  getDb() {
    return this.db;
  }
}
