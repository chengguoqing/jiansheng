<template>
    <section>
        <header class="mui-bar mui-bar-nav asd_uy_dftx">
            <van-icon name="arrow-left" class="mui-pull-left z3 mt15 mui-action-back" @tap="back" />
            <h1 class="mui-title z3">活动详情</h1>

        </header>

        <!--
        <div class="mui-scroll-wrapper df_jh_deertty ab" ref="mui_scroll">
            <div class="mui-scroll">

                <img :src="sd.activityImg" class="w100 kx">
                <section class="bgff">
                    <section class="pd pt10 pm10 fz16 mui-row">

                        <p class="mui-col-xs-9 fz16 z3"> {{sd.activityName}}</p>
                        <p class="mui-col-xs-3 fz12 z3 tr">已报名{{sd.signNum}}人</p>
                        <p class="qc"></p>
                    </section>
                    <section class="btm pt10 pm10 pd dian" @click="$store.state.is_map=true">
                        <span class="d_jh_deet cz">
                            <i class="f_i map_icosder"></i>
                        </span>
                        <span class="fz15 cz">
                            活动地点：{{sd.activityAddr}}
                        </span>
                    </section>
                    <section class="btm pt10 pm10 pd dian">
                        <span class="d_jh_deet cz">
                            <i class="f_i map_icosder ab"></i>
                        </span>
                        <span class="fz15 cz">
                            报名时间：
                            <span class="red">{{sd.signStartTime}}</span>
                        </span>
                    </section>
                    <section class="btm pt10 pm10 pd dian">
                        <span class="d_jh_deet cz">
                            <i class="f_i map_icosder ab"></i>
                        </span>
                        <span class="fz15 cz">
                            报名截止：{{sd.signEndTime}}
                        </span>
                    </section>
                </section>

                <section class="bgff mt10">
                    <p class="pd pt10 pm10 fz16 z3">
                        活动介绍
                    </p>
                    <section class="fz15 pd btm pt10 pm10 z6 content" v-html="sd.activityIntroduce">

                    </section>

                </section>

                <section class="bgff mt10">
                    <p class="pd pt10 pm10 fz16 z3">
                        行程安排
                    </p>
                    <section class="fz15  btm pt10 pm10 z6 dsf_khj_deert pd" v-html="sd.activityTrip">

                    </section>

                </section>

                <section class="bgff mt10">
                    <p class="pd pt10 pm10 fz16 z3">
                        注意事项
                    </p>
                    <section class="fz15 pd btm pt10 pm10 z6 dsf_khj_deert" v-html="sd.activityMatter">

                    </section>

                </section>

            </div>
        </div>
-->
    </section>
</template>
<script>
import cg_ge from "../cg_ge.js";
export default {
    data() {
        return {
            sd: "",
            embed: null,
            id: "",
            type: ""
        };
    },
    components: {},
    methods: {
        back() {
            this.embed.close();
        }
    },
    mounted() {},
    created() {
        this.id = this.$route.query.id_e;
        this.type = this.$route.query.type;
        if (this.type == "1") {
            // console.log(
            //    "http://www.fitness-partner.cn/bill/index.html#/gameActivityDetailApp/" +
            //        this.id
            //);
            //console.log("http://www.fitness-partner.cn/bill/a/index.html#/gameActivityDetailApp/" + this.id)
            this.embed = plus.webview.create(
                "https://www.fitness-partner.cn/bill/a/index.html#/gameActivityDetailApp/" +
                    this.id,
                "",
                { top: "56px", bottom: "0px" }
            );
        } else {
            this.embed = plus.webview.create(
                "https://www.fitness-partner.cn/bill/a/index.html#/activityDetailApp/" +
                    this.id,
                "",
                { top: "56px", bottom: "0px" }
            );
        }
        plus.webview.currentWebview().append(this.embed);
        var old_back = mui.back;
        mui.back = function() {
            var wvs = plus.webview.all();
            for (var i = 0; i < wvs.length; i++) {
                if (
                    wvs[i].getURL().indexOf("activityDetailApp") > 0 ||
                    wvs[i].getURL().indexOf("gameActivityDetail") > 0
                ) {
                  //  alert("webview" + i + ": " + wvs[i].getURL());
                    wvs[i].close();
                }
            }
            history.back(-1);
        };
        return;
        let sd_ddr = {},
            th = this;

        var sd_df_a = "serviceActivity",
            sd_df_b = "getActivityDetail";
        if (this.$route.query.type == 1) {
            (sd_df_a = "serviceEvent"), (sd_df_b = "getEventDetail");
        }

        this.post(sd_df_a, sd_df_b, sd_ddr, function(data) {
            if (th.$route.query.type == 1) {
                th.sd = cg_ge.xxiangq_w(data.info.jshbEventDetails);
                console.log(data.info.jshbEventDetails);
            } else {
                th.sd = cg_ge.xxiangq_w(data.info.jshbActivityDetails);
            }

            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        });
    }
};
</script>
<style scoped>
</style>
