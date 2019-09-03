<template>
  <v-container>
    <img class="public-background" src="../assets/splash.jpg" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-text-field
              v-model="username"
              label="Username"
              name="username"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              type="email"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              name="password"
              type="password"
            ></v-text-field>

            <v-text-field
              v-model="repeat"
              label="Repeat Password"
              name="repeatPassword"
              type="password"
            ></v-text-field>

            <v-checkbox v-model="acceptTerms" label="Accept terms and conditions">
            </v-checkbox>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="register">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class RegisterComponent extends Vue {

  private username: string = '';
  private email: string = '';
  private password: string = '';
  private repeat: string = '';
  private acceptTerms: boolean = false;

  private register(): void {
    this.$router.push('/login');
  }

}
</script>