<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
              ></v-text-field>
            </v-form>
            <v-alert v-if="error" 
              :dismissible="dismissible" 
              type="error" 
              class="mb-4">
              {{ error }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject } from 'vue-typedi';

import { AuthService } from '@/services/AuthService';
import { LoginResponse } from '@/models/LoginResponse';

@Component
export default class App extends Vue {
  private service: AuthService = new AuthService();

  private username: string = 'admin@accedia.com';
  private password: string = 'admin';
  private error: string = '';

  private login() {
    this.error = '';
    this.service
      .login(this.username, this.password)
      .then((resp) => {
        this.error = '';
        this.$store.commit('setToken', resp.data.token);
        this.$store.commit('setUser', resp.data.user);
        this.$router.push('/');
      })
      .catch((err) => {
        this.error = 'Invalid username or password';
      });
  }
}
</script>