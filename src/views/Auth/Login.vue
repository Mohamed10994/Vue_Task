<template>
   <v-app>
     
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-form>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue">
                <v-toolbar-title>Login Form</v-toolbar-title>
              </v-toolbar>

              <ul class="error-messages">
                <li v-for="(error, i) in errors" :key="i">{{ error.message }}</li>
              </ul>
              <v-card-text>
                <v-text-field prepend-icon="email" name="email" label="Email" type="text" v-model="user.email"></v-text-field>

                <v-text-field prepend-icon="lock" name="password" label="Password" type="password" v-model="user.password"></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn to="/register" rounded color="indigo" dark>Sign up</v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded color="primary" dark @click.prevent="login">
                  Login
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      user: {}
    };
  },
  methods: {
    login() {
      this.$axios
        .post("https://reqres.in/api/login", this.user)
        .then(response => {
          console.log(response.data.token);
          this.$store.dispatch("loginSuccess", response.data);
          this.$router.push({ name: "home" });
        })
        .catch(exception => {
          console.log(exception);
        });
    }
  },
  mounted() {}
};
</script>