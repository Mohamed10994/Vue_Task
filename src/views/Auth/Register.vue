<template>
  <v-app>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Signup form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="email" name="email" v-model="user.email" label="Email"></v-text-field>

                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="user.password"
                  
                ></v-text-field>

                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Confirm Password"
                  type="password"
                  v-model="user.confirm_password"
                  
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/" rounded color="black" dark>Login</v-btn>
              <v-spacer></v-spacer>
              <v-btn rounded color="success" @click.prevent="register">
                Register
                <v-icon>keyboard_arrow_up</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
export default {
  name: "register",

  data() {
    return {
      user: {}
    };
  },
  methods: {
    register() {
      this.$axios
        .post("https://reqres.in/api/register", this.user)
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