import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        is_select: false, //显示隐藏下拉选择
        load_in: false,
        venueCity: "石家庄", //城市
        latitude: "38.048684",
        longitude: "114.520828",
    },
    mutations: {
        increment(state) {

        }
    }
})
