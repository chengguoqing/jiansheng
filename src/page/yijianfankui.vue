<template>
	<div >
	 <header class="mui-bar mui-bar-nav asd_uy_dftx">
  <van-icon name="arrow-left"  class="mui-pull-left z3 mt15  mui-action-back" />
        <h1 class="mui-title z3">意见反馈</h1>

    </header>
    <section class="mui-content " id="seek_apper">
        
        <section class="pl10 pt10">
                <p class="fz15 z3">反馈类型</p>
            <section class="mui-row">
                <section class="mui-col-xs-4 pr10" v-for="sd in sd_ddfgf">
                    <a class="dfd_drtt" :class="sd.cls" @click="dfdsf(sd)">{{sd.name}}{{sd.index}}</a>
                </section>
            </section>
            
            </section>
        <section class="pd mt10">
            <section class="pr">
                <textarea placeholder="选择问题类型帮助我们更快处理您的反馈！" rows="9" class="dsf_h_deert" v-model="sdsd_jh_de"></textarea>
            
                <p class="dsf_jh_deer z6">
                {{sdsd_jh_de.length}}/300字
                </p>
            </section>
        
        </section> 
        
         <section class="btm cen pt15 pm15 bbm pl10" >
                   
<!--                     <img :src="sd.url_sd" class="sd_jh_deeetert" v-else>-->
               <section class="pr f_gh_deeert ab" v-for="(sd,idx) in files"> 
                    <img src="../assets/img/close.png" class="close_eert"  @click="clse_sd(idx)">
                           <img :src="sd" class="sd_jh_deeet cz">
                </section>   
                   
                <section class="pr f_gh_deeert" @click="sd_dfg"> 
                           
                         <img src="../assets/img/zpsc.png" class="sd_jh_deeet cz">
                </section>
             <p class="qc"></p>
            </section>
        
        
        
        
        
        <a class="mui-btn mui-btn-red tuichuer_e" @click="tijiao">提交</a>
        

    </section>


	</div>
</template>
<script>
    import base from "../js/base.js"
    export default {
        data() {
            return {
                is_sdf: "mui-active",
                classify: "1",
                sdsd_jh_de: "",
                sd_ddfgf: [{
                    cls: "act",
                    name: "功能异常",
                    index: 1
                }, {
                    cls: "",
                    name: "体验问题",
                    index: 2
                }, {
                    cls: "",
                    name: "功能建议",
                    index: 3
                }, {
                    cls: "",
                    name: "其他",
                    index: 4
                }, ],
                files: [], //图片 base64格式的  需要上传接口返回utl的
            }
        },
        components: {

        },
        methods: {
            sd_dfg: function(sd) { //上传图片
                let th = this
                base.sc.xz('请上传图片', function(url) {
                    alert(url)
                    th.files.push("data:image/png;base64," + url)
                })
            },
            clse_sd(idx) { //关闭按钮删除图片
                th.files.splice(0, idx)
            },
            dfdsf: function(sd) {
                this.sd_ddfgf.map(function(a) {
                    a.cls = ""
                })
                sd.cls = "act"
                this.classify = sd.index
            },
            tijiao: function() {
                let th = this,
                    yijian = {}
                if (mui.os.ios) {
                    yijian.type = "ios"
                } else if (mui.os.android) {
                    yijian.type = "android"
                } else {
                    yijian.type = "otherSystem"
                }
                yijian.system = mui.os.version //手机版本号
                yijian.phone = "" // 手机型号，获取不到，算了
                yijian.path = "" //图片地址
                yijian.content = th.sdsd_jh_de //评论内容
                yijian.classify = th.classify //意见类型
                //console.log(yijian)
                this.post('servicefile', 'setAppAdvise', yijian, function(data) {
                    mui.back()
                })


            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .f_gh_deeert {
        width: 100px;
        height: 100px;
        border: 1px solid #dadada;
        text-align: center;
        line-height: 100px;
        float: left;
        margin-right: 10px;
    }

    .f_gh_deeert.ab img {
        width: 100%;
        height: 100%;
    }

    .close_eert {
        width: 25px !important;
        height: 25px !important;
        position: absolute;
        right: -10px;
        top: -10px;
    }

</style>
