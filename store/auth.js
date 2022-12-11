export const state = () => ({
    user:[]
})

export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}


export const actions = {
    async SignUp({ commit }, data) {
        await this.$axios.post(this.$config.apiUrl + '/signUp', data)
            .then((data) => {
            this.$router.push('/signin')
        })
    },
    async SignIn({commit}, data){
        await this.$axios.post(this.$config.apiUrl + '/signIn', data)
            .then((data) => {
                this.$cookies.set('token', data.data.token)
                this.$cookies.set('user', data)
                this.$router.push('/')
        })
    },
    async selectUser({ commit }) {
        await this.$axios.get(this.$config.apiUrl + "/getUser")
            .then((data) => {
                commit('setUser', data.data)
        })
    }
}