<template>
	<div >
	<header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">教练详情</h1>

    </header>
    <div class="mui-content bgff" id="seek_apper">
        <section class="pd pt20 pm10">
            <img :src="sd.headimg"  class="yj user_icoeer fl">
            <section class="ov pl10">
                <p class="fz16 z3 mt5">{{sd.username}}</p>
                <p class="z9 fz12 mt2">
                    年龄：{{sd.age}} 身高：{{sd.userheight}}CM 体重：{{sd.userweight}}kg
                </p>
            </section>
            <p class="qc"></p>
        </section>
        <section class="btm pt10 pm10 box cen dfg_ceeert bbm">
            <p class="box_a z3" v-for="(sd,idx) in usde_r" @click="sd_ddfg(sd,idx)">
                <span :class="sd.cls">{{sd.name}}</span>
            </p>
        </section>


        <section id="sd_dert_a">
            <p class="pd mt10">
                <span class="ls">教练资质</span> 
            </p>
            <p class="cen mt100">
                <img src="../assets/img/dsf_sdf.png" class="dsf_sdf_eer">
            </p>

        </section>

        <section id="sd_dert_b">
              <p class="pd mt10">
                <span class="ls">可授项目</span> 
            </p>
            <p class="pd pt10 pm10 z3">
            瑜伽、太极拳、舞蹈、游泳
            </p>

        </section>

             <section id="sd_dert_c">
                   <p class="pd mt10">
                <span class="ls">教学场地</span> 
            </p>
            <p class="pd pt10 pm10 z3">
            河北省石家庄市某街某巷某号某楼
            </p>

        </section>


             <section id="sd_dert_d">
                   <p class="pd mt10">
                <span class="ls">个人简历</span> 
            </p>
            <p class="pd pt10 pm10 z3 dfser_jh_deer">
            毕业于石家庄经济学院，持有计算机和五笔证书，在
校期间进修瑜伽至今已有5年多， 现持有高级瑜伽导师证
书和各种瑜伽特色课程证书，擅长哈他瑜伽。
            </p>

        </section>
            <section id="sd_dert_e" class="pm40">
                  <p class="pd mt10">
                <span class="ls">动力秀</span> 
            </p>
            <p class="pd pt10 pm10 z3 tr">
     
            </p>
<!--                <img src="img/ddfd_e.jpg" class="w100">-->
                
             <section class="dsf_deeert">
                 <p class="sd_jh_deert" :style="{'background-image': 'url('+sd.img+')'}" v-for="(sd,idx) in jshbPrieduserImgList" @click="dianji(idx)"></p>
<!--                      <img :src="sd.img" v-for="sd in jshbPrieduserImgList"  class="sd_jh_deert kx">  -->
  </section>
                
<!--
                <section class="pr dfg_rrert pd">
                    <van-swipe :autoplay="3000" class="h100">
                        <van-swipe-item v-for="sd in jshbPrieduserImgList" class="h100">
                            <img :src="sd.img" class="w100 h100">
                        </van-swipe-item>
                    </van-swipe>
                </section>
-->

        </section>


    </div>

	</div>
</template>
<script>
    var VueScrollTo = require('vue-scrollto');
    import { ImagePreview } from 'vant';
    export default {
        data() {
            return {
                sd: "",

                id_ddf: "",
                usde_r: [{
                    name: "教练资质",
                    cls: "act",
                    cl_er: "#sd_dert_a"
                }, {
                    name: "可授项目",
                    cls: "",
                    cl_er: "#sd_dert_b"
                }, {
                    name: "教学场地",
                    cls: "",
                    cl_er: "#sd_dert_c"
                }, {
                    name: "个人简历",
                    cls: "",
                    cl_er: "#sd_dert_d"
                }, {
                    name: "动力秀",
                    cls: "",
                    cl_er: "#sd_dert_e"
                }],
                jshbPrieduserImgList: ""
            }
        },
        components: {

        },
        methods: {
            sd_ddfg: function(sd, idx) {
                this.usde_r.map(function(a) {
                    a.cls = ""
                })
                this.id_ddf = idx
                sd.cls = "act"
                VueScrollTo.scrollTo(sd.cl_er, '', {
                    offset: -110
                })
            },
            dianji(idx) {//点击放大
                let sd_der=[]
                this.jshbPrieduserImgList.map(a=>{
                    sd_der.push(a.img)
                })
                ImagePreview(sd_der,idx);
            }
        },
        watch: {
            sd: function(value) {
                if (value.age == "0") {
                    this.sd.age = "未登记"
                } else {
                    this.sd.age = this.sd.age + "岁"
                }
            }

        },
        mounted() {
            let th = this
            console.log({
                prieduserId: this.$route.query.id
            })

            this.post('serviceCourse', 'getPrieduserDetail', {
                prieduserId: this.$route.query.id
            }, function(data) {
                console.log(data.info);
                th.jshbPrieduserImgList = data.info.jshbPrieduserImgList
                th.sd = data.info.jshbPrieduser;

                
            })
        },
    }

</script>
<style>


</style>
<style scoped>
    .dfg_ceeert {
        position: sticky;
        left: 0px;
        top: 59px;
        z-index: 1000;
        background: #fff
    }

    .sd_jh_deert {
        width: 200px;
        height: 200px;
        margin-left: 15px;
        background-position: center center;
        background-size: cover;
        display: inline-block;
    }

    .dsf_deeert {
        overflow: auto;
        white-space: nowrap;
    }

</style>
