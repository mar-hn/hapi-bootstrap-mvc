const fw = global['fw'] = {};

fw.utils = require('./utils');
fw.db = new (require('./dbmanager'));
fw.param = require('joi');

fw.promise = (fn) =>
{
    return new Promise(async function(resolve,reject)
    {
        await fn(resolve,reject).catch(function(ex)
        {
            reject(ex);
        });
    });
}


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