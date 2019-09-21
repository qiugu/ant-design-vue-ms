import { constRouterMap, asyncRouterMap } from '@/router/router.config';

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 * @param permission  当前账户的角色
 * @param route 当前路由信息
 * @returns {boolean} 判断当前路由信息的meta字段中的权限是否包含账户的角色权限
 */
function hasPermission(permission: any, route: any): boolean {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles: any, route: any): boolean {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id);
  }
  return true;
}

/**
 * @param routerMap 动态权限的路由
 * @param roles 当前账户的角色
 * @returns 具有账户权限的路由
 */
function filterAsyncRouter(routerMap: any, roles: any): any {
  const accessedRouters = routerMap.filter((route: any) => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const permission = {
  state: {
    routers: constRouterMap,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state: any, routers: any): void => {
      state.addRouters = routers;
      state.routers = constRouterMap.concat(routers);
    },
  },
  actions: {
    GenerateRoutes(store: any, data: any): Promise<string> {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
        store.commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    },
  },
};

export default permission;
