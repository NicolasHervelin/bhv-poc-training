import Vue from "vue";
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
            name: 'homePage',
            component: HomePage
        },
        {
            path: '/products',
            name: 'productsPage',
            component: ProductsPage,
            props: true
        },
        {
            path: '/product/:id',
            name: 'productPage',
            component: ProductPage,
            props: true
        }
    ]
})
