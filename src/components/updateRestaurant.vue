<template>
  <HeaderPage />
  <h1>Hello user, welcome on Update Restaurant page</h1>
</template>
<script>
import HeaderPage from "./HeaderPage.vue";
export default {
  name: "updateRestaurant",
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
