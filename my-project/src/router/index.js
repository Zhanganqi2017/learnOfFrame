import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/side-menu-item'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'sideMenu',
        component: menu
    }]
})