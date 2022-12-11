export const state = () => ({
    rule:[]
})

export const mutations = {
    setRule(state, rule) {
        state.rule = rule
    }
}

export const actions = {
    async postRule({ commit },data) {
        await this.$axios.post(this.$config.apiUrl + '/rule', data)
            .then((data) => {
                this.$toast.success('create rule success');
                this.$router.push('/rule')
        })
    },
    async getRule({ commit }) {
        await this.$axios.get(this.$config.apiUrl + '/rule')
            .then((data) => {
                commit('setRule', data.data)
        })
    }
}