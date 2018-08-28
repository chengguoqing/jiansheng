// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/mui.min.css'
import './css/base.css'
import './css/iconfont.css'
import 'vant/lib/vant-css/index.css';
import './css/style.css'
import VueResource from 'vue-resource'; 
import store from './store'
Vue.config.productionTip = false
import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import public_m from './public_m'
    import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Switch } from 'vant';
import { SwitchCell } from 'vant';
import scroll from 'vue-seamless-scroll'
import { Collapse, CollapseItem } from 'vant';
import { Field } from 'vant';

import { RadioGroup, Radio } from 'vant';
import { Slider } from 'vant';


import { Actionsheet } from 'vant';
import { Dialog } from 'vant';
import { NoticeBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Stepper } from 'vant';
import vuex from 'vuex'
Vue.use(vuex);
import { Lazyload } from 'vant';

import { Waterfall } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Waterfall);


Vue.use(Lazyload);
Vue.use(Stepper);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(NoticeBar);
Vue.use(Dialog);
Vue.use(Actionsheet);


Vue.use(Slider);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(VueResource)
Vue.use(Field);
Vue.use(Collapse).use(CollapseItem);
Vue.use(scroll)
Vue.use(scroll,{componentName: 'scroll-seamless'})
Vue.use(SwitchCell);
Vue.use(Switch);
Vue.use(Cell).use(CellGroup);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Icon);
Vue.use(Button);
Vue.use(public_m);
Vue.use(Swipe).use(SwipeItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
