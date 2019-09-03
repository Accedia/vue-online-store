<template>
  <v-app>
    <v-app-bar app
      v-if="isUserLogged"
      color="primary"
      dark>

      <v-btn text href="http://localhost:8080">
        <router-link to="/">
          <img src="./assets/logo.png" class="header-logo" />
        </router-link>
      </v-btn>

      <v-spacer></v-spacer>

      <v-row class="mt-3">
        <v-col>
          <v-text-field
            v-model="searchTerm"
            label="Search products"
            type="text"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn text icon @click="search">
            <v-icon>fa-search</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <router-link to="/cart" class="cart-button mr-3">
        <v-icon>fa-shopping-cart</v-icon>
        <span class="badge" v-if="cartSize">{{ cartSize }}</span>
      </router-link>
      <img :src="userImage" class="user-image mr-2" />

      <v-btn
        @click="logout"
        color="primary">
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

  private searchTerm: string = '';

  private get isUserLogged() {
    return this.$store.getters.isLoggedIn;
  }

  private get userImage() {
    return this.$store.getters.userImage;
  }

  private get cartSize() {
    return this.$store.getters.cartSize;
  }

  private search() {
    this.$router.push({ name: 'search', query: { q: this.searchTerm } });
    this.searchTerm = '';
  }

  private logout() {
    this.$store.commit('clearToken');
    this.$store.commit('clearUser');
    this.$router.push('/login');
  }

}
</script>

<style lang="scss">
  html {
    overflow-y: auto !important;
  }

  .header-logo {
    width: 85px;
    height: 50px;
  }

  .user-image {
    width: 55px;
    height: 55px;
    border-radius: 50px;
  }

  .cart-button {
    position: relative;

    .badge {
      position: absolute;
      padding: 0px 5px;
      top: -5px;
      right: -8px;
      border-radius: 20px;
      color: #424242;
      font-size: 12px;
      background-color: #ffe000;
    }
  }

  .col-1 .theme--dark.v-btn:hover::before {
    opacity: 0;
  }

  .public-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    object-fit: cover;
    -webkit-filter: blur(2px);
    filter: blur(2px);
    overflow-y: hidden;
  }
</style>
