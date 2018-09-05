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
        
        
        
        <a class="mui-btn mui-btn-red tuichuer_e" @click="tijiao">提交</a>
        

    </section>


	</div>
</template>
<script>
    export default {
        data() {
            return {
                is_sdf: "mui-active",
                classify:"1",
                sdsd_jh_de: "",
                sd_ddfgf: [{
                    cls: "act",
                    name: "功能异常",
                    index:1
                }, {
                    cls: "",
                    name: "体验问题",
                     index:2
                }, {
                    cls: "",
                    name: "功能建议",
                    index:3
                }, {
                    cls: "",
                    name: "其他",
                    index:4
                }, ]
            }
        },
        components: {

        },
        methods: {
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
                if(mui.os.ios){
                    yijian.type = "ios"
                }    
                else if(mui.os.android){
                    yijian.type = "android"
                }
                else{
                    yijian.type = "otherSystem"
                }
                yijian.system = mui.os.version //手机版本号
                yijian.phone = "" // 手机型号，获取不到，算了
                yijian.path = "" //图片地址
                yijian.content = th.sdsd_jh_de //评论内容
                yijian.classify = th.classify  //意见类型
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


</style>
