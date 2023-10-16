import { createApp } from "vue";
import App from "./App.vue";
import BoardServiceHttp from "./services/BoardServiceHttp";
import AxiosAdapter from "./infra/http/AxiosAdapter";

const app = createApp(App);
const httpClient = new AxiosAdapter();
app.provide("boardService", new BoardServiceHttp(httpClient));
app.mount("#app");
