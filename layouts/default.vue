<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-avatar>
        <v-img
        src="/logo.png"
        ></v-img>
      </v-avatar>
      <v-spacer />
      <p class="text-h6 mt-4">A D M I N - I C A N J O B</p>
      <v-spacer />
      <v-btn text @click="Logout">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'auth',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Add Video',
          to: '/video',
        },
        {
          icon: 'mdi-compass-rose',
          title: 'Add Rule',
          to: '/rule',
        },
        {
          icon: 'mdi-account',
          title: 'User',
          to: '/user',
        },
        {
          icon: 'mdi-file',
          title: 'Add File',
          to: '/document',
        },
      ],
      miniVariant: false,
      right: true,
    }
  },
  methods: {
    Logout() {
      this.$cookies.remove('token')
      this.$router.push('/signin')
    },
  },
}
</script>
