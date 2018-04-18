'use strict';

require('./fw');
require('dotenv').config();
const Hapi  = require('hapi');

const server = new Hapi.Server({
    port: process.env.PORT || 3030,
    host: process.env.HOST || 'localhost'
});

function getRoutes()
{
    let routesPaths = fw.utils.getFiles('routes/**/*.js', true);
    let routes = [];

    if(fw.utils.isArray(routesPaths))
    {
        for(let r of routesPaths )
            routes.push(require(r));
    }

    return routes;
}

function getPlugins() 
{
    let pluginsPaths = fw.utils.getFiles('sys/Plugins/**/*.js', true);
    let plugins = [];

    if (fw.utils.isArray(pluginsPaths)) 
    {
        for (let p of pluginsPaths)
            plugins.push(require(p));
    }

    return plugins;
}


async function start(){

    console.log('Starting...');

    try 
    {        
        for (let plugin of getPlugins())
            await plugin(server);

        for(let route of getRoutes())
            server.route(route);
        
        fw.Handlebars = require('handlebars');
        
        server.views({
            engines: 
            {
                hbs: 
                {
                    module: fw.Handlebars,
                    compileMode: 'sync' // engine specific
                }
            },
            relativeTo: __dirname,
            compileMode: 'async',
            path: '../templates',
            layout: 'default.layout',
            partialsPath: '../templates/partials',
            layoutPath: '../templates/layouts',
            helpersPath: '../templates/helpers'
        });
        
        // Start server
        await server.start();
        console.log(`Server is running on ${server.info.uri}`);
        console.log(`Enviroment: ${process.env.NODE_ENV || 'development'}`);
    }
    catch(error){
        console.error(error);
    }
    
    
}

start();