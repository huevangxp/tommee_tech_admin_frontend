<template>
  <v-container>
    <v-card elevation="0" max-width="500" class="mx-auto mt-12">
      <v-card-title>Sign Up your information</v-card-title>
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
          v-model="user.position"
          outlined
          dense
          placeholder="Position"
          append-icon="mdi-developer"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field
          v-model="user.phone"
          outlined
          dense
          placeholder="Phone"
          append-icon="mdi-phone"
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
          :rules="passwordRules"
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field
          v-model="user.ConfirmPassword"
          outlined
          dense
          placeholder="Password"
          hide-details="auto"
          :rules="confirmPasswordRules"
          :type="!showPass ? 'password' : 'text'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-card-text>
      <v-card-text class="d-flex justify-end">
        <v-btn color="red" class="mr-3" dark to="/signin">Cancel</v-btn>
        <v-btn color="success" @click="SignUp">Sign In</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'Blank',
  data() {
    return {
      showPass: false,
      user: {
        username: '',
        position: '',
        phone: '',
        password: '',
        role: 'admin',
      },
    }
  },
  computed: {
    passwordRules() {
      return [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ]
    },
    confirmPasswordRules() {
      return [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.user.password ||
          'The password confirmation does not match.',
      ]
    },
  },
  methods: {
    SignUp() {
      this.$store.dispatch('auth/SignUp', { ...this.user })
    },
  },
}
</script>
