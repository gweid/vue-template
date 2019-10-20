import Vue from 'vue';
import Router from 'vue-router';
import router_1 from './router_1';
import Ohter from '../pages/other';
Vue.use(Router);
const load = (path) => {
    return () => import(`@/pages${path}`);
};
export default new Router({
    mode: process.env.ROUTER_MODE || 'hash', // 配置在'../config/config.js'
    routes: [
        {
            path: '/',
            name: '首页',
            component: load('/home'),
            children: [...router_1],
        },
        {
            path: '/other',
            name: 'Other',
            component: load('/other'),
        },
        // {
        //     path: '/child',
        //     component: () => import('../pages/child.vue'),
        // },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});
