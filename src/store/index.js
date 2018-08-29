import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        is_select: false,//显示隐藏下拉选择
        load_in:false
    },
    mutations: {
        increment(state) {
           
        }
    }
})
