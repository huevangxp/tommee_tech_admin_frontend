<template>
  <v-container fluid>
    <v-card elevation="0">
      <v-card-title> Add Video </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="doc_title"
              outlined
              dense
              hide-details="auto"
              placeholder="Title"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="doc.description"
              counter="100"
              outlined
              height="100"
              dense
              placeholder="Description"
              hide-details="auto"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input
              v-model="profile"
              @change="doc.image"
              outlined
              dense
              placeholder="File Document"
            ></v-file-input>
          </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="red mr-5" dark to="/document">Cancel</v-btn>
            <v-btn class="success" dark @click="save">Save</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      doc: {
        titile: '',
        images:'',
        description: '',
      },
    }
  },
  methods: {
    save() {
      console.log({...this.doc});
    }
  },
}
</script>
