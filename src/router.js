import { createRouter, createWebHistory } from 'vue-router';

import Todos from './views/Todos';
import About from './views/About.vue';

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Todos
        },
        {
            path: '/about',
            component: About
        }
    ]
})