require('babel/register');

import Models from './models';

export default class Plugin {

  constructor(sequelize) {

    this.db = (new Models(sequelize)).getDb();

  }

}
