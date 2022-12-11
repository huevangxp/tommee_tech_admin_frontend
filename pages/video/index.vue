<template>
  <div>
    <div class="pa-6">
      <v-spacer />
      <div class="d-flex">
        <div>
          <h1>Manage Video</h1>
        </div>
        <v-spacer />
        <div>
          <v-btn color="primary" to="/video/postVideo">Create Rule</v-btn>
        </div>
      </div>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="video"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #[`item.showVideo`]="{ item }">
          <video width="40%" controls>
            <source
              :src="`http://localhost:8080/${item.video}`"
              type="video/mp4"
            />
            <source
              :src="`http://localhost:8080/${item.video}`"
              type="video/ogg"
            />
          </video>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-btn color="red" dark icon text @click="deleteUser(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn color="green" dark icon text @click="getOneUser(item.id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: '', value: 'showVideo' },
        { text: '', value: 'actions' },
      ],
    }
  },
  computed: {
    video() {
      return this.$store.state.video.video
    },
  },
  mounted() {
    this.$store.dispatch('video/getVideo')
  },
}
</script>
