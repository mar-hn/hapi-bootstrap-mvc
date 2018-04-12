const UsersCtrl = fw.getController('users');

module.exports = 
[
  { method: 'GET', path: '/users', options: { handler: UsersCtrl.renderMain } },
  { method: 'GET', path: '/users/view', options: { handler: UsersCtrl.renderView } }
];