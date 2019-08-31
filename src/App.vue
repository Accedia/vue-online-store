<template>
  <v-app>
    <v-app-bar app
      v-if="isUserLogged"
      color="primary"
      dark>

      <v-btn text href="http://localhost:8080">
        <img src="./assets/logo.png" class="header-logo" />
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
          <v-btn text icon>
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
</style>
