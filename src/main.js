import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import VueParticles from "particles.vue";

Vue.use(VueRouter);
Vue.use(VueParticles);

Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
