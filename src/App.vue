<template>
  <v-app>
    <v-app-bar app
      v-if="isUserLogged"
      color="primary"
      dark>
      <v-btn
        text
        href="http://localhost:8080"
      >
        <img src="./assets/logo.png" class="header-logo" />
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        @click="logout">
        <span>Logout</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {

  private get isUserLogged() {
    return this.$store.getters.isLoggedIn;
  }

  private logout() {
    this.$store.commit('clearToken');
    this.$store.commit('clearUser');
    this.$router.push('/login');
  }

}
</script>

<style lang="scss">
  .header-logo {
    width: 85px;
    height: 50px;
  }
</style>
