<template>
  <HeaderPage />
  <h1>Hello user, welcome on Update Restaurant page</h1>
  <form class="add" action="">
    <input
      type="text"
      placeholder="Enter name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter contact"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" @click="update">Update Restaurant</button>
  </form>
</template>
<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  name: "updateRestaurant",
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
    async update() {
      console.warn(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    // console.warn(this.$route.params.id);
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
