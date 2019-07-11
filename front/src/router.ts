import {Vue} from "vue/types/vue";
import Router from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsPage,
            props: true
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductPage,
            props: true
        }
    ]
})
