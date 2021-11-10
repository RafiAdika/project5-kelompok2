import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home.vue"
import InfoMotor from "@/components/InfoMotor.vue"
import Beli from "@/components/Beli.vue"
import peduli from "@/components/peduli.vue"
Vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "Home",
            component: home
        },
        {
            path: "/InfoMotor",
            name: 'InfoMotor',
            component: InfoMotor
        },
        {
            path: "/Beli",
            name: 'Beli',
            component: Beli
        },
        {
            path: "/peduli",
            name: 'peduli',
            component: peduli
        },
    ]
}

const router = new Router({
    mode: "history",
    routes: configRoutes(),
    scrollBehavior: () => ({ y: 0 }),
});
export default router;