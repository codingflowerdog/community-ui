import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {boardRoutes} from "@/router/board";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [];

// 게시판 라우트 정보 추가
routes.push(...boardRoutes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
