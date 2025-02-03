<template>
  <HeaderPage />
  <h1>Hello {{ name }}, welcome on Home page</h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Action</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
      </td>
    </tr>
  </table>
</template>
<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    HeaderPage,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>

<style>
td {
  width: 150px;
  height: 40px;
}
</style>
