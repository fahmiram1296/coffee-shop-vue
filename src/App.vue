<script>
import Home from './pages/Homepage/index.vue'
import Header from './smart-component/Header/index.vue'

const routes = {
  '/': Home,
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || "/"];
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
    },
    components: { Header }
}
</script>

<template>
  <Header />
  <component :is="currentView" />
</template>