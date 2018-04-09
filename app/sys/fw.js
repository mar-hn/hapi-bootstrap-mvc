const fw = global['fw'] = {};

fw.utils = require('./utils');
fw.db = new (require('./dbmanager'));


fw.getController = (name) => 
{
    return require('../controllers/'+name+'.js');
};