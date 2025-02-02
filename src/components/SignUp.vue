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

      console.warn(result);
      if (result.status == 201) {
        alert("Signed up sucessfully");
      }
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 30px auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
