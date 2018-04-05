module.exports = 
[
    {
      method: 'GET',
      path: '/main',
      options: {
        handler: fw.getController('main').render
      }
    }
];