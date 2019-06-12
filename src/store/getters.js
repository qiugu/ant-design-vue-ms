const getters = {
  token: state => state.user.token,
  username: state => state.user.username,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab,
  cover: state => state.user.cover
}
export default getters
