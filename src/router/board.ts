import { RouteConfig } from 'vue-router'
import Board from '../views/Board.vue'

export const namespaced = true;
const boardRoutes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Board',
        component: Board
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

export { boardRoutes };
