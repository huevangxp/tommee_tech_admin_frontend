<template>
  <v-container fluid>
    <v-card elevation="0">
      <v-card-title> Add Video </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              dense
              hide-details="auto"
              placeholder="Title"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              counter="100"
              outlined
              height="100"
              dense
              placeholder="Description"
              hide-details="auto"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <video width="100%" controls>
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML video.
            </video>
          </v-col>
          <v-col cols="12" class="d-flex justify-end" >
              <v-btn class="red mr-5" dark>Cancel</v-btn>
              <v-btn class="success" dark>Save</v-btn>
            </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PostVideoPage',
}
</script>
