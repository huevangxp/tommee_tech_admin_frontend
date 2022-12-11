<template>
  <v-row justify="center" align="center">
    <v-col v-for="data in [1, 2, 3, 4]" :key="data" cols="12" md="3">
      <v-card>
        <v-card-title class="d-flex justify-center"> All User </v-card-title>
        <v-card-title class="d-flex justify-center">500 </v-card-title>
        <v-card-text class="d-flex justify-center">People</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
