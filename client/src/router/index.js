import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "@/views/Page1"
import Page2 from "@/views/Page2";
import Page3 from "@/views/Page3";
import Page4 from "@/views/Page4";
import Page5 from "@/views/Page5";
import Page6 from "@/views/Page6";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        alias: "/page1",
        name: "Page 1",
        component: Page1,
    },
    {
        path: "/page2",
        name: "Page 2",
        component: Page2,
    },
    {
        path: "/page3",
        name: "Page 3",
        component: Page3,
    },
    {
        path: "/page4",
        name: "Page 4",
        component: Page4,
    },
    {
        path: "/page5",
        name: "Page 5",
        component: Page5,
    },
    {
        path: "/page6",
        name: "Page 6",
        component: Page6,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
