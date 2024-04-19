import { createApp } from 'vue'
import './style.css'
import App from './app.vue'


import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Rating from "primevue/rating";

const app = createApp(App);

app.use(PrimeVue)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-rating', Rating)
    .mount('#app')

