const fw = global['fw'] = {};

fw.utils = require('./utils');

fw.getController = (name) => 
{
    return require('../controllers/'+name+'.js');
};