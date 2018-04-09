const indexCtrl = fw.getController('main');

module.exports = 
[
  { method: 'GET', path: '/test', options: { handler: indexCtrl.render } },
  { method: 'POST', path: '/test', options: { handler: indexCtrl.render } }
];