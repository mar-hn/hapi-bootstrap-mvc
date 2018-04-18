'use strict';

exports = module.exports = async (server) => 
{
    try 
    {
        // Register
        await server.register(require('inert'));
    } catch (e) {
        console.error('Error on inert Plugin', e);
        throw e
    }
    
    console.log(['info', 'plugin'], 'plugin: inert registered');
    return true;
};