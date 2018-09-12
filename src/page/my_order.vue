<!--我的订单-->
<template>
    <div>
        <header class="mui-bar mui-bar-nav asd_uy_dftx">
            <van-icon name="arrow-left " class="mui-pull-left z3 mt15 mui-action-back" />
            <h1 class="mui-title z3">我的订单</h1>
            <section class="mui-pull-right fz15 dsf_deert"><!--编辑--></section>

        </header>
        <section class="mui-row dsf_jh_deeet">
            <section class="df_eretjH_deert" :class="sd.cls" v-for="(sd,idx) in dings_d" @tap="xz_dff(sd)">
                <span>{{sd.name}}</span>
            </section>
        </section>
        <div class="  mui-scroll-wrapper df_jh_deertty ac" ref="mui_scroll">
            <div class="mui-scroll">

                <section v-waterfall-lower="loadMore" waterfall-disabled="disabled" waterfall-offset="0">

                    <section class="pd bgff mt5 btm" v-for="sd in data_list" @click="sd.state == '1'?hf('order_xq_pay?id='+sd.id+'&orderType='+qingqiu.orderType):hf('order_xq?id='+sd.id+'&orderType='+qingqiu.orderType)">
                        <section class="mui-row fz15 pt5  pm5">
                            {{sd.name}}
                            <span v-if="sd.state == '1'" class="fr ls fz14">待付款</span>
                             <span v-if="sd.state == '2'" class="fr ls fz14">已付款</span>
                              <span v-if="sd.state == '5'" class="fr ls fz14">已完成</span>
                              <span v-if="sd.state == '6'" class="fr ls fz14">已取消</span>
                        </section>
                        <section class="btm pt10 mui-row pm10" >
                            <img :src="sd.img" class="df_erjh_deer fl">
                            <section class="ov pl10 pt10">
                                <p class="fz14 z3">预约项目：场馆</p>
                                <p class="fz12 z6">{{sd.orderNo}}</p>
                                <p class="fz12 red">￥{{sd.payAmt}}</p>
                            </section>
                        </section>
                        <section class="pt5 pm5 tr btm fd_jh_deeret">
                            <!--<van-button type="primary" plain @tap="hf('changguan_detail?id=afb8f004065540b795847551dceae2a0')">再来一单</van-button>-->
                            <van-button type="primary" plain v-if="sd.state=='1'">付款</van-button>
                        </section>

                    </section>

                </section>
            </div>
        </div>
        <dibu :active="3" v-if="type_p!=1"></dibu>

    </div>
</template>
<script>
import base from "../js/base.js";
import dibu from "../components/dibu";
export default {
    data() {
        return {
            state: "",
            dings_d: [
                {
                    name: "全部",
                    cls: "act",
                    id: ""
                },
                {
                    name: "待付款",
                    cls: "",
                    id: 1
                },
                {
                    name: "已付款",
                    cls: "",
                    id: 2
                },
                {
                    name: "已完成",
                    cls: "",
                    id: 5
                },
                {
                    name: "回收站",
                    cls: "",
                    id: "del"
                }
            ],
            disabled: false, //是否禁止滚动 true禁止
            data_list: [],
            qingqiu: {
                orderType: 1,
                userId: "",
                state: "",
                delFlag: "",
                pageNo: 1,
                jshbToken: ""
            }
        };
    },
    components: {
        dibu
    },
    methods: {
        loadMore() {
            //下拉刷新触发
            if (!this.disabled) {
                this.disabled = true;
                let th = this;
                th.get_data(function(leg) {
                    th.qingqiu.pageNo++;
                });
            }
        },
        xz_dff(sd) {
            this.dings_d.map(a => {
                a.cls = "";
            });
            this.qingqiu.delFlag = "";
            if (sd.id == "del") {
                this.qingqiu.delFlag = 2;
            }
            this.qingqiu.state = sd.id;
            this.qingqiu.orderType = 1;
            this.qingqiu.pageNo = 1;
            this.data_list = [];
            this.qingqiu.jshbToken = plus.storage.getItem("userId");
           // alert(JSON.stringify(this.qingqiu));
            this.get_data();
            sd.cls = "act";
        },
        get_data(call_back) {
            let th = this;
            try {
            } catch (e) {}
            this.post("serviceorder", "getOrderList", this.qingqiu, function(
                data
            ) {
                try {
                    if (data.info.page.list.length <= 0) {
                        return;
                    }
                } catch (e) {
                    return;
                }
                console.log(JSON.stringify(data));
                data.info.page.list.map(a => {
                    a.evaluate = parseInt(a.evaluate);
                    a.kh_de = 5 - a.evaluate;
                    th.data_list.push(a);
                });

                th.disabled = false;
                if (data.info.page.list.length < 10) {
                    //没有10条数据禁止下拉
                    th.disabled = true;
                }

                try {
                    call_back(data.info.page.list.length);
                } catch (e) {}
                console.log(data);
            });
        }
    },
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });

        let type_e = this.$route.query.type || 0;
        this.qingqiu.orderType = this.$route.query.type || 1;
        this.dings_d.map(a => {
            a.cls = "";
        });
        this.dings_d[type_e].cls = "act";
        this.qingqiu.userId = plus.storage.getItem("userId");
        this.qingqiu.jshbToken = plus.storage.getItem("token");
    }

};
</script>
<style scoped>
.dsf_deert {
    margin-top: 12px;
}

.df_eretjH_deert {
    width: 20%;
    float: left;
    font-size: 15px;
}

.df_eretjH_deert span {
    padding-left: 10px;
    padding-right: 10px;
}

.df_eretjH_deert.act span {
    color: #259fdf;
    border-bottom: 1px solid #259fdf;
    padding-bottom: 8px;
}

.dsf_jh_deeet {
    position: fixed;
    left: 0px;
    width: 100%;
    background: #fff;
    line-height: 40px;
    text-align: center;
    top: 59px;
    z-index: 1000;
}

.df_erjh_deer {
    width: 80px;
    height: 80px;
}

.fd_jh_deeret button {
    width: 80px;
    height: 28px;
    font-size: 12px;
    line-height: 26px;
    margin-left: 5px;
}
</style>
