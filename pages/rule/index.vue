<template>
    <div>
      <div class="pa-6">
        <v-spacer />
        <div class="d-flex">
          <div>
            <h1>Manage Rule</h1>
          </div>
          <v-spacer />
          <div>
            <v-btn color="primary" to="/rule/add"
              >Create Rule</v-btn
            >
          </div>
        </div>
      </div>
      <div>
        <v-data-table
          :headers="headers"
          :items="rule"
          :items-per-page="5"
          class="elevation-1">
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
          { text: 'Title', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: '', value: 'actions' },
          ],
      }
    },
    mounted() {
        this.$store.dispatch('rule/getRule')
    },
    computed: {
        rule() {
            return this.$store.state.rule.rule
        }
    }
  }
  </script>
  