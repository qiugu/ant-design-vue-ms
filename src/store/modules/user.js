const user = {
    state: {
        username: sessionStorage.getItem("username"),
        token: sessionStorage.getItem("token")
    },
    mutations: {
        SET_USER: (state, data) => {
            state.username = data.username
        },
        SET_TOKEN: (state, data) => {
            state.token = data.token
        }
    },
    actions: {
        
    }
}
export default user
