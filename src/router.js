import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import loginPage from "./components/loginPage.vue";
import addRestaurant from "./components/addRestaurant.vue";
import updateRestaurant from "./components/updateRestaurant.vue";
const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "loginPage",
    component: loginPage,
    path: "/login",
  },
  {
    name: "addRestaurant",
    component: addRestaurant,
    path: "/add-restaurant",
  },
  {
    name: "updateRestaurant",
    component: updateRestaurant,
    path: "/update-restaurant/:id",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
