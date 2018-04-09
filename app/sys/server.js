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

async function start(){

    console.log('Starting...');

    for(let route of getRoutes())
    {
        server.route(route);
    }

    await server.register(require('vision'));

    server.views({
        engines: 
        {
            hbs: 
            {
                module: require('handlebars'),
                compileMode: 'sync' // engine specific
            }
        },
        relativeTo: __dirname,
        compileMode: 'async',
        path: '../templates',
        layout: 'default',
        partialsPath: '../templates/views',
        layoutPath: '../templates/layouts',
        helpersPath: '../templates/helpers'
    })
    

    try
    {
        await server.start();
        console.log(`Server is running on Port ${server.info.uri}`);
        console.log(`Enviroment: ${process.env.NODE_ENV || 'development'}`);
    }
    catch(error){
        console.log(error);
    }
    
    
}

start();