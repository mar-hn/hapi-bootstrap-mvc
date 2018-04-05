'use strict';

require('./fw');
const Hapi  = require('hapi');
// const routesModule = require('./routes.js');      

const server = new Hapi.Server({
    port:3030,
    host:'localhost'
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
    }
    catch(error){
        console.log(error);
    }
    
    
}

start();