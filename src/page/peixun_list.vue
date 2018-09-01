<template>
	<div >
	
<header class="mui-bar mui-bar-nav asd_uy_dftx">
         <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)"/>
        <h1 class="mui-title z3">培训</h1>

    </header>
    <div class="mui-content " id="seek_apper">
<!--
<section class="sd_jh_deertd">

        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted fg_jh_dfeert bbm pr">
            <div class="mui-scroll bbm">
                <section class="f_b " v-for="sd in caidan" :class="sd.cls" @tap="sd_df(sd)">
                    {{sd.name}}
                </section>



            </div>
            <span class="sd_jh_ddfrg"><i class="f_i add_icon_er"></i></span>
        </div> 
      
        
        </section>
-->
        <ul v-waterfall-lower="loadMore"
  waterfall-disabled="disabled"
  waterfall-offset="0">
            <li class="bbm pt10 pm10 pd" v-for="sd in data_list">
                <img :src="sd.profileImg" class="fl ferng_s">
                <section class="ov pl10 ">
                        <p class="dianer z3">
           {{sd.trainName}}
                        </p>
<!--
                    <p>
                        <i class="f_i xinxisdrr mr5" v-for="sd in evaluate"></i>
                             <i class="f_i xinxisdrr mr5 ab" v-for="sd in kh_de"></i>
                    </p>
-->
                    <p class="red fz16 mt20"> 
                        ￥{{sd.returnPrice}}
                        
                        <span class="fz14 fr z9" v-if="sd.authState==2">已结束</span>
                    </p>
                    <p class="z9 fz14" v-if="sd.authState!=2">
                    已报名：{{sd.trainLimitNum}}人
                    </p>
                </section>
                
                
                <p class="qc"></p>
                
            </li> 
        
        </ul>
        


    </div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                piaowu: {
                    pageNo: 1, //页码
                    pageSize: 10, //
                    showType: "", //
                    orderBy: "",
                    city: this.$store.state.venueCity, //
                    tuijian: 1,
                    grantProject: "",
                    searchInfo: ""

                },
                data_list: [], //数据列表
                disabled: false, //是否禁止滚动 true禁止
            }
        },
        components: {

        },
        methods: {
            loadMore() { //下拉刷新触发

                if (!this.disabled) {
                    this.disabled = true;
                    let th = this
                    th.getdata(function(leg) {
                        th.disabled = false
                        th.piaowu.pageNo++
                            if (leg < 10) { //没有10条数据禁止下拉
                                th.disabled = true
                            }

                    })
                }

            },

            getdata(call_back) {
                let th = this
                this.post('serviceTrain', 'getProjectList', this.piaowu, function(data) {



                    data.info.page.list.map(a => {
        
                        a.evaluate = parseInt(a.evaluate)
                        a.kh_de = 5 - a.evaluate
                        th.data_list.push(a)
                    })


                    try {
                        call_back(data.info.page.list.length)
                    } catch (e) {

                    }
                    console.log(data);

                })
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
