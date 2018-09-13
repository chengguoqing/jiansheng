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
import yijianfankui from '@/page/yijianfankui'
import register_zhu from '@/page/register_zhu'
import register_er from '@/page/register_er'
import my_order from '@/page/my_order'
import order_xq from '@/page/order_xq'
import goupiaoxq from '@/page/goupiaoxq'
import jiaolianshenqing from '@/page/jiaolianshenqing'
import changguanruzhu from '@/page/changguanruzhu'
import shezhi from '@/page/shezhi'
import querendingdan from '@/page/querendingdan'
import zhengjianshangchuan from '@/page/zhengjianshangchuan'
import changguanyuding from '@/page/changguanyuding'
import chengshi from '@/page/chengshi'
import order_xq_pay from '@/page/order_xq_pay'
import test from '@/page/test'
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
    }, {
            path: '/yijianfankui',
            name: 'yijianfankui',
            component: yijianfankui
    }, {
            path: '/register_zhu',
            name: 'register_zhu',
            component: register_zhu
    }, {
            path: '/register_er',
            name: 'register_er',
            component: register_er
    }, {
            path: '/my_order',
            name: 'my_order',
            component: my_order
    }, {
            path: '/order_xq',
            name: 'order_xq',
            component: order_xq
    }, {
            path: '/goupiaoxq',
            name: 'goupiaoxq',
            component: goupiaoxq
    }, {
            path: '/jiaolianshenqing',
            name: 'jiaolianshenqing',
            component: jiaolianshenqing
    }, {
            path: '/changguanruzhu',
            name: 'changguanruzhu',
            component: changguanruzhu
    }, {
            path: '/shezhi',
            name: 'shezhi',
            component: shezhi
    }, {
            path: '/querendingdan',
            name: 'querendingdan',
            component: querendingdan
    }, {
            path: '/zhengjianshangchuan',
            name: 'zhengjianshangchuan',
            component: zhengjianshangchuan
    }, {
            path: '/changguanyuding',
            name: 'changguanyuding',
            component: changguanyuding
    }, {
            path: '/chengshi',
            name: 'chengshi',
            component: chengshi
    }, {
            path: '/order_xq_pay',
            name: 'order_xq_pay',
            component: order_xq_pay
}, {
            path: '/test',
            name: 'test',
            component: test
}
  ]
})

