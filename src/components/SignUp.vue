<template>
  <img class="logo" src="../assets/restourant.png" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter you name" />
    <input type="text" v-model="email" placeholder="Enter you email" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter you password"
    />
    <button v-on:click="SignUp">Register</button>
    <p><router-link to="./login">Sign In</router-link></p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async SignUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style></style>
