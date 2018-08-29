import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import application_form from '@/page/application_form'
import huodong from '@/page/huodong'
import huodongxiangqing from '@/page/huodongxiangqing'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/application_form',
            name: 'application_form',
            component: application_form
    }, {
            path: '/huodong',
            name: 'huodong',
            component: huodong
    }, {
            path: '/huodongxiangqing',
            name: 'huodongxiangqing',
            component: huodongxiangqing
    }
  ]
})
