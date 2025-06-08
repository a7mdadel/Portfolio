// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "vue3-particles";

const app = createApp(App);

app.use(router);
app.use(Particles);

AOS.init();

app.mount("#app");
