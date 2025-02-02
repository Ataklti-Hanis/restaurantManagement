import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import loginPage from "./components/loginPage.vue";
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
