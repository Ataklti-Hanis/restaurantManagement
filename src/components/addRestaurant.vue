<template>
  <HeaderPage />
  <h1>Hello user, welcome on Add Restaurant page</h1>
  <form class="add" action="">
    <input type="text" placeholder="Enter name" v-model="restaurant.name" />
    <input
      type="text"
      placeholder="Enter address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      placeholder="Enter contact"
      v-model="restaurant.contact"
    />
    <button type="button" @click="addRestaurant">Add new Restaurant</button>
  </form>
</template>
<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  name: "addRestaurant",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.warn(result);
      if (result.status == 201) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
