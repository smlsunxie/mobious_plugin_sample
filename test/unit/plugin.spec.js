import Plugin  from '../../src';
import Sequelize from 'sequelize';
import {test} from '../../src/config/config.json';

describe('description', () => {

  it('description', (done) => {

    var sequelize = new Sequelize(test.database, test.username, test.password, test);

    var plugin = new Plugin(sequelize);

    console.log('=== plugin.db ===', plugin.db);

    done();
  });

});
