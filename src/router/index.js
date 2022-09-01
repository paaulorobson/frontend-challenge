import Vue from "vue";
import VueRouter from "vue-router";
import Personagens from "../views/Personagens.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Personagens",
    component: Personagens,
  },
  {
    path: "/filmes",
    name: "Filmes",
    component: () => import("../views/Filmes.vue"),
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    component: () => import("../views/Cadastrar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
