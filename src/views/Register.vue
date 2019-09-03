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
              :error-messages="usernameErrors"
              label="Username"
              name="username"
              type="text"
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="Email"
              name="email"
              type="email"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              name="password"
              type="password"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              required
            ></v-text-field>

            <v-text-field
              v-model="repeat"
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              :error-messages="repeatErrors"
              @input="$v.repeat.$touch()"
              @blur="$v.repeat.$touch()"
            ></v-text-field>

            <v-checkbox
              v-model="acceptTerms" 
              label="Accept terms and conditions"
              :error-messages="acceptErrors"
              @input="$v.acceptTerms.$touch()"
              @blur="$v.acceptTerms.$touch()">
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
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

@Component({
  mixins: [validationMixin],
  validations: {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeat: { required },
    acceptTerms: { required },
  },
})
export default class RegisterComponent extends Vue {

  private username: string = '';
  private email: string = '';
  private password: string = '';
  private repeat: string = '';
  private acceptTerms: boolean = false;

  private get usernameErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.username.$dirty) {
      return errors;
    }

    if (!this.$v.username.required) {
      errors.push('Name is required.');
    }

    return errors;
  }

  private get emailErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.email.$dirty) {
      return errors;
    }

    if (!this.$v.email.required) {
      errors.push('Email is required.');
    }

    if (!this.$v.email.email) {
      errors.push('Invalid email format');
    }

    return errors;
  }

  private get passwordErrors(): string[] {
    const errors: string[] = [];
    if (!this.$v.password.$dirty) {
      return errors;
    }

    if (!this.$v.password.required) {
      errors.push('Password is required.');
    }

    if (!this.$v.password.minLength) {
      errors.push('Password should be at least 8 characters.');
    }

    return errors;
  }

  private get repeatErrors(): string[] {
    const errors: string[] = [];

    if (!this.$v.repeat.$dirty && this.password !== this.repeat) {
      errors.push('The passowrds don\'t match.');
    }

    return errors;
  }

  private get acceptErrors(): string[] {
    if (!this.$v.acceptTerms.$dirty) {
      return [];
    }

    return this.acceptTerms ? [] : ['You should accept the terms and agreements.'];
  }

  private register(): void {
    this.$v.$touch();

    if (!this.$v.$invalid) {
      this.$router.push('/login');
    }
  }

}
</script>