import { createApp, h } from 'vue'
import App from './App.vue'
import store from "./vuex/store";

createApp({ render: () => h(App) })
  .use(store)
  .mount("#app");