import { RouteConfig } from 'vue-router'
import Board from '../views/Board.vue'

export const namespaced = true;
const boardRoutes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Board',
        component: Board
    }
];

export { boardRoutes };
