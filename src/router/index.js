import { createWebHistory, createRouter } from "vue-router";
import ContactBook from '../views/ContactBook.vue';
const routes = [
    {
        path: "/",
        alias: "/contactbook",
        name: "ContactBook",
        component:ContactBook
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;