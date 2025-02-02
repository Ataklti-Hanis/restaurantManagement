<template>
  <h1>Login Page</h1>
  <img class="logo" src="../assets/restourant.png" alt="" />
  <h1>sign In</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter you email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter you password"
    />
    <button @click="login">Sign In</button>
    <p><router-link to="./sign-up">Sign Up</router-link></p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
    },
  },
};
</script>
