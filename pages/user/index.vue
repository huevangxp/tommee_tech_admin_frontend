<template>
    <div>
      <div class="pa-6">
        <v-spacer />
        <div class="d-flex">
            <h1>Manage User</h1>
        </div>
      </div>
      <div>
        <!-- {{getUser}} -->
  
        <v-data-table
          :headers="headers"
          :items="item"
          :items-per-page="5"
          :options.sync="options"
          class="elevation-1"
        >
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
        options: {},
        showModal: false,
        deleteModal: false,
        loading: false,
        imageModal: false,
        image: null,
        deletedId: null,
        headers: [
          {
            text: 'User Name',
            align: 'start',
            sortable: false,
            value: 'username',
          },
          { text: 'Position', value: 'position' },
          { text: 'Role', value: 'role' },
          { text: 'password', value: 'password' },
          { text: '', value: 'actions' },
          ],
        item:[
          {
            username: 'Frozen Yogurt',
            position: 'hueavng',
            role:"i what the fuck",
            password:'rule '
            },
        ]
      }
    },
  }
  </script>
  