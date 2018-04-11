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

    try 
    {

        // Plugin Vision
        await server.register(require('vision'));
        // Plugin inert
        await server.register(require('inert'));

        await server.register(require('hapi-auth-cookie'));
        
        // Cache
        fw.cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
        server.app.cache = fw.cache;

        // Auth Cookie
        server.auth.strategy('session', 'cookie',  
        {
            password: 'somecrazycookiesecretthatcantbeguesseswouldgohere', // cookie secret
            redirectTo: '/login',
            cookie: 'jsid', // Cookie name
            isSecure: false, // required for non-https applications
            ttl: 24 * 60 * 60 * 1000,
            validateFunc: await fw.getController('security').validate
        });
        server.auth.default('session');


        for(let route of getRoutes())
        {
            server.route(route);
        }

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