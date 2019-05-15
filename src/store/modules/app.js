const app = {
    state: {
        multiTab: []
    },
    mutations: {
        ADD_TAB (state, {title,key}) {
            state.multiTab.push({title,key})
        },
        DELETE_TAB (state,key) {
            state.multiTab = state.multiTab.filter(item => item.key !== key)
        },
        SET_TAB (state,key) {
            state.multiTab = key
        }
    },
    actions: {
    }
}
export default app
