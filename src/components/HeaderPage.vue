<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <router-link to="update-restaurant">Update Restaurant</router-link>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>
<script>
// import { RouterLink } from "vue-router";

export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "loginPage" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  align-content: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background-color: #ddd;
  color: #333;
}
</style>
