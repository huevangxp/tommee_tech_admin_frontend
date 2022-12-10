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
                counter="300"
                outlined
                dense
                placeholder="Description Rule"
                hide-details="auto"
              ></v-textarea>
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
  
  }
  </script>
  