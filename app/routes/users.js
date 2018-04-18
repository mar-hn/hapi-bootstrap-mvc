const UsersCtrl = fw.getController('users');

module.exports = 
[
  { method: 'GET', path: '/users', options: { handler: UsersCtrl.renderMain } },
  { method: 'GET', path: '/users/view', options: { handler: UsersCtrl.renderView } },
  { method: 'GET', path: '/users/edit', options: { handler: UsersCtrl.renderEdit } },
  { method: 'GET', path: '/users/add', options: { handler: UsersCtrl.renderAdd } },
  { method: 'POST', path: '/users/add', options: { handler: UsersCtrl.addUser, tags: ['api']} },
  { method: 'POST', path: '/users/edit', options: { handler: UsersCtrl.editUser, tags: ['api']} },
  { method: 'POST', path: '/users/delete', options: { handler: UsersCtrl.deleteUser, tags: ['api']} }
];