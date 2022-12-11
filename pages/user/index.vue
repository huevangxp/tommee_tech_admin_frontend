<template>
  <div>
    <div class="pa-6">
      <v-spacer />
      <div class="d-flex">
        <h1>Manage User</h1>
      </div>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="user"
        :items-per-page="5"
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
      headers: [
        {
          text: 'User Name',
          align: 'start',
          sortable: false,
          value: 'username',
        },
        { text: 'Position', value: 'position' },
        { text: 'Role', value: 'role' },
        { text: 'Phone', value: 'phone' },
        { text: '', value: 'actions' },
      ],
    }
  },
  mounted() {
    this.$store.dispatch('auth/selectUser')
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
