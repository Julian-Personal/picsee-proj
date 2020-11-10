import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;
