import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path:'/',
        name:'/',
        component: () => import('../views/home/HomeView.vue')
    },
    {
        path:'/department-staff',
        name:'/department&staff',
        component: () => import('../views/staff_department/Staff_Department.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;