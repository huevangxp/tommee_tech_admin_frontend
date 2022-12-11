export const state = () => ({
    video:[]
})

export const mutations = {
    setVideo(state, video) {
        state.video = video
    }
}

export const actions = {
  async postVideo({ commit }, data) {
    console.log({ data })
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('video', data.video)

    await this.$axios
      .post(this.$config.apiUrl + '/video', formData)
      .then((data) => {
        console.log(data)
      })
    },
    async getVideo({ commit }) {
        await this.$axios.get(this.$config.apiUrl + '/video')
            .then((data) => {
            commit('setVideo', data.data)
        })
    }
}
