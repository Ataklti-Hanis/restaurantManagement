<template>
  <HeaderPage />
  <h1>Hello user, welcome on Add Restaurant page</h1>
</template>
<script>
import HeaderPage from "./HeaderPage.vue";
export default {
  name: "addRestaurant",
  components: {
    HeaderPage,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
