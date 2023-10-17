import { createApp } from "vue";
import App from "./App.vue";
import BoardServiceHttp from "./services/BoardServiceHttp";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import { createRouter, createWebHistory } from "vue-router";
import BoardsViewVue from "../src/views/BoardsView.vue";
import BoardViewVue from "../src/views/BoardView.vue";
import LoginViewVue from "../src/views/LoginView.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: LoginViewVue },
        { path: "/boards", component: BoardsViewVue },
        { path: "/boards/:idBoard", component: BoardViewVue }
    ]
});

const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3000";
app.use(router);
app.provide("boardService", new BoardServiceHttp(httpClient, baseUrl));
app.mount("#app");
