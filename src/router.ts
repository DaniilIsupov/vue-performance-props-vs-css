import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import ListWithProps from './views/ListWithProps.vue';
import ListWithoutProps from './views/ListWithoutProps.vue';

export const routerHistory = createWebHistory(import.meta.env.BASE_URL);
export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '/',
            name: 'Home',
            components: { default: Home }
        },
        {
            path: '/list-with-props',
            name: 'ListWithProps',
            component: ListWithProps
        },
        {
            path: '/list-without-props',
            name: 'ListWithoutProps',
            component: ListWithoutProps
        }
    ]
});
