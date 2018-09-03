import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import application_form from '@/page/application_form'
import huodong from '@/page/huodong'
import huodongxiangqing from '@/page/huodongxiangqing'
import changguan_detail from '@/page/changguan_detail'
import yuechangguan_list from '@/page/yuechangguan_list'
import bingxueji_list from '@/page/bingxueji_list'
import piaowu_list from '@/page/piaowu_list'
import yuejiaolian_list from '@/page/yuejiaolian_list'
import peixun_list from '@/page/peixun_list'
import jiaolian_detail from '@/page/jiaolian_detail'
import yuedongyou from '@/page/yuedongyou'
import fabuyaoyue from '@/page/fabuyaoyue'
import search from '@/page/search'
import login from '@/page/login'
import user_center from '@/page/user_center'
Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
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
    }, {
            path: '/changguan_detail',
            name: 'changguan_detail',
            component: changguan_detail
    }, {
            path: '/yuechangguan_list',
            name: 'yuechangguan_list',
            component: yuechangguan_list
    }, {
            path: '/bingxueji_list',
            name: 'bingxueji_list',
            component: bingxueji_list
    }, {
            path: '/piaowu_list',
            name: 'piaowu_list',
            component: piaowu_list
    }, {
            path: '/yuejiaolian_list',
            name: 'yuejiaolian_list',
            component: yuejiaolian_list
    }, {
            path: '/peixun_list',
            name: 'peixun_list',
            component: peixun_list
    }, {
            path: '/jiaolian_detail',
            name: 'jiaolian_detail',
            component: jiaolian_detail
    }, {
            path: '/yuedongyou',
            name: 'yuedongyou',
            component: yuedongyou
    }, {
            path: '/fabuyaoyue',
            name: 'fabuyaoyue',
            component: fabuyaoyue
    }, {
            path: '/search',
            name: 'search',
            component: search
    }, {
            path: '/login',
            name: 'login',
            component: login
    }, {
            path: '/user_center',
            name: 'user_center',
            component: user_center
    }
  ]
})
