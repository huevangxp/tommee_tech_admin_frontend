<template>
    <v-container fluid>
      <v-card elevation="0">
        <v-card-title> Add Video </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="rule.title"
                outlined
                dense
                hide-details="auto"
                placeholder="Title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="rule.description"
                counter="300"
                outlined
                dense
                placeholder="Description Rule"
                hide-details="auto"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="d-flex justify-end" >
              <v-btn class="red mr-5" dark to="/rule">Cancel</v-btn>
              <v-btn class="success" dark @click="save">Save</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
export default {
    name:'AddRulePage',
    data() {
        return {
            rule: {
                title: '',
                description:''
            }
        }
    },
    methods: {
        save() {
            this.$store.dispatch('rule/postRule', {...this.rule})
        }
    }
  }
  </script>
  