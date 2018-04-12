const fw = global['fw'] = {};

fw.utils = require('./utils');
fw.db = new (require('./dbmanager'));


fw.getController = (name) => 
{
    return require('../controllers/'+name+'.js');
};

fw.getDAO = (name) => 
{
    return require('../models/DAO/'+name+'DAO.js');
};

fw.getService = (name) => 
{
    return require('../models/services/'+name+'Service.js');
};