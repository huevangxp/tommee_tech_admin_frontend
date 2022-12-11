<template>
  <v-container>
    <v-card max-width="500" class="mx-auto mt-12">
      <v-card-title>Sign In to System</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="user.username"
          outlined
          dense
          placeholder="User Name"
          append-icon="mdi-account"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field
          v-model="user.password"
          outlined
          dense
          placeholder="Password"
          hide-details="auto"
          :type="!showPass ? 'password' : 'text'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        Create a new account ?
        <v-btn text color="red" to="/signup">Click Here</v-btn>
      </v-card-text>
      <v-card-text class="d-flex justify-end">
        <v-btn color="success" @click="SignIn">Sign In</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'Blank',
  middleware: 'unAuth',
  data() {
    return {
      showPass: false,
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    SignIn() {
      this.$store.dispatch('auth/SignIn', { ...this.user })
    },
  },
}
</script>
