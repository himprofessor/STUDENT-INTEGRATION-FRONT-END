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
    },
    {
        path:'/career-opportunity',
        name:'/career-opportunity',
        component: () => import('../views/career-opportunity/Career_Opportunity.vue')
    },
    {
        path:'/curriculum',
        name:'/curriculum',
        component: () => import('../views/curriculum/CurriculumImport.vue')
    },
    {
        path:'/student_activity',
        name:'/student_activity',
        component: () => import('../views/student_activity/Student_Activity.vue')
    },
    {
        path:'/news_update',
        name:'/news_update',
        component: () => import('../views/news_update/News_Update.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;