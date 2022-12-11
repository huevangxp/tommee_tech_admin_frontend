<template>
  <v-container fluid>
    <v-card elevation="0">
      <v-card-title> Add Video </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="learn.title"
              outlined
              dense
              hide-details="auto"
              placeholder="Title"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-file-input
              id="id"
              v-model="learn.video"
              type="file"
              @change="onFileChange"
            ></v-file-input>
          </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="red mr-5" dark to="/video">Cancel</v-btn>
            <v-btn class="success" dark @click="save">Save</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'PostVideoPage',
  data() {
    return {
      learn: {
        title: '',
        video: '',
      },
    }
  },
  methods: {
    save() {
      this.$store.dispatch('video/postVideo', this.learn)
    },
  },
  onFileChange(e) {
      if (e) {
        this.url = URL.createObjectURL(e)
        this.learn.course = this.url
      }
    },
}
</script>
