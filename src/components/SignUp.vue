<template>
  <img class="logo" src="../assets/restourant.png" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter you name" />
    <input type="text" placeholder="Enter you email" />
    <input type="password" placeholder="Enter you password" />
    <button>Register</button>
  </div>
</template>
<script>
export default {
  name: "SignUp",
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
