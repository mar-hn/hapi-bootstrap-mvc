'use strict';

exports = module.exports = async (server) => 
{
    try 
    {
        // Register
        await server.register(require('vision'));
    } catch (e) {
        console.error('Error on vision Plugin', e);
        throw e
    }
    
    console.log(['info', 'plugin'], 'plugin: vision registered');
    return true;
};