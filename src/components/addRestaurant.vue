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
    addRestaurant() {
      console.warn(this.restaurant);
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
