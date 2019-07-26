const getters = {
  token: (state: any): string => state.user.token,
  username: (state: any): string => state.user.username,
  roles: (state: any): string => state.user.roles,
  addRouters: (state: any): any => state.permission.addRouters,
  cover: (state: any): boolean => state.user.cover
}
export default getters
