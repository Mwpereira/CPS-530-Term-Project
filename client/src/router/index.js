import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Install from "@/views/Install";
import Framework from "@/views/Framework";
import Tutorial from "@/views/Tutorial";
import Conclusion from "@/views/Conclusion";
import Developers from "@/views/Developers";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/install",
        name: "Install",
        component: Install,
    },
    {
        path: "/framework",
        name: "Framework",
        component: Framework,
    },
    {
        path: "/tutorial",
        name: "Tutorial",
        component: Tutorial,
    },
    {
        path: "/conclusion",
        name: "Conclusion",
        component: Conclusion,
    },
    {
        path: "/developers",
        name: "Developers",
        component: Developers,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
