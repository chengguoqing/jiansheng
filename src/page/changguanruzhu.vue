<template>
    <div>

        <header class="mui-bar mui-bar-nav asd_uy_dftx">
            <van-icon name="arrow-left " class="mui-pull-left z3 mt15 mui-action-back" />
            <h1 class="mui-title z3">申请入驻</h1>
            <a class=" mui-pull-right">
                <i class="f_i mao_icosst" @click="$store.state.is_map=true"></i>
            </a>
        </header>
        <div class="mui-content " id="seek_apper">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label class="fz16">场馆名称</label>
                    <input type="text" class="mui-input-clear fz15" placeholder="请您输入场馆名称">
                </div>
                <div class="mui-input-row">
                    <label class="fz16">场馆面积</label>
                    <input type="text" class="mui-input-clear fz15" placeholder="请您输入场馆面积(平米)">
                </div>
                <div class="mui-input-row">
                    <label class="fz16">从业人数</label>
                    <input type="text" class="mui-input-clear fz15" placeholder="请您输入从业人数">
                </div>
                <div class="mui-input-row">
                    <label class="fz16">场馆电话</label>
                    <input type="tel" class="mui-input-clear fz15" placeholder="请您输入座机电话号码或者手机号">
                </div>
                <div class="mui-input-row">
                    <label class="fz16">邀 请 码</label>
                    <input type="text" class="mui-input-clear fz15" placeholder="请您输入邀请码">
                </div>
            </form>

            <p class="cen mt20">
                申请注册即视为同意
                <a class="red">《健身伙伴服务协议》</a>
            </p>

            <a class="mui-btn mui-btn-red tuichuer_e" @click="tijiao">申请入驻</a>
        </div>

        <map_tiaozhuang :venueAddr="sd.venueAddr" :latitude="sd.latitude" :longitude="sd.longitude"></map_tiaozhuang>

    </div>
</template>
<script>
import map_tiaozhuang from "../components/map_tiaozhuang";
export default {
    data() {
        return {
            sd: {}
        };
    },
    components: {
        map_tiaozhuang
    },
    methods: {
        tijiao: function() {
            mui.back();
        }
    },
    mounted() {}
};
</script>
<style scoped>
</style>
