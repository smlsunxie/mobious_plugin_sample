'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var fs = require('fs');
var path = require('path');

var Models = (function () {
  function Models(sequelize) {
    _classCallCheck(this, Models);

    var db = {};

    fs.readdirSync(__dirname).filter(function (file) {
      return file.indexOf('.') !== 0 && file !== 'index.js';
    }).forEach(function (file) {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

    Object.keys(db).forEach(function (modelName) {
      if ('associate' in db[modelName]) {
        db[modelName].associate(db);
      }
    });

    this.db = db;
    this.db.sequelize = sequelize;
  }

  _createClass(Models, [{
    key: 'getDb',
    value: function getDb() {
      return this.db;
    }
  }]);

  return Models;
})();

exports['default'] = Models;
module.exports = exports['default'];