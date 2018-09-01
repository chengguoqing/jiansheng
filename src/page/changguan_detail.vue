<template>
	<div >
	   <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)"/>
        <h1 class="mui-title z3">{{sd.venueName}}</h1>
  <a class="  mui-pull-right">
        <i class="f_i mao_icosst" @click="$store.state.is_map=true"></i>
        </a>
    </header>
        
        
          <div class="mui-content " id="seek_apper">
<!--        <img  :src="sd." class="w100 kx">-->
              
              <section class="pr dfg_rrert">
                  <van-swipe :autoplay="3000" class="h100">
                      <van-swipe-item v-for="sd in jshbVenueImgList" class="h100">
                          <img :src="sd.clearImg" class="w100 h100">
                      </van-swipe-item>
                  </van-swipe>
              </section>
              
              
        
         <section class="bgff">
        <section class="pd pt10 pm10 fz16">
            {{sd.venueName}}
            <span class="fr fz12 z3">{{sd.ordernum}}人已预订</span>
            <p class="qc"></p>
        </section>
             
             <section class="btm pd">
                <p class="dsf_tiiwerx">
                    <span>健身</span> 
                </p>
                
              <section class="btm mui-row dsf_jh_deett">
                    <section class="mui-col-xs-4 fz16">
                  年卡
                  </section>
                      <section class="mui-col-xs-4 fz16 cen red">
                  ￥1600
                  </section>
                      <section class="mui-col-xs-4 fz16 tr">
                  <a class="mui-btn dsf_jh_erdert" @click="zhu('changguanyuding')">立即预定</a>
                  </section>
                 
                 </section>
                 
                     <section class="btm mui-row dsf_jh_deett">
                    <section class="mui-col-xs-4 fz16">
                  年卡
                  </section>
                      <section class="mui-col-xs-4 fz16 cen red">
                  ￥1600
                  </section>
                      <section class="mui-col-xs-4 fz16 tr">
                  <a class="mui-btn dsf_jh_erdert" @click="zhu('changguanyuding')">立即预定</a>
                  </section>
                 
                 </section>
                 
                 
                 
             </section>
             
             
             
             
              
        </section>
        
        <section class="mt10 bgff pd pm5" v-if="jshbPrieduserList.length>0">
            <p class="fz16 z3 pt10 pm10">教练信息</p>
        
            <section class="pd pt10 pm10 yj4 dfs_jh_deer mb10" v-for="sd in jshbPrieduserList">
                <img :src="sd.headimg" class="use_d_dert cz fl">
                <section class="ov pl10">
                    <ul class="dsf_kjhj_der">
                        <li class="mui-row">
                            <p class="sd_jh_det z3 fl fz15">
                            姓 名： 
                            </p>
                            <section class="ov fz15">
                            {{sd.username}}
                            </section>
                        </li>
                          <li class="mui-row">
                            <p class="sd_jh_det z3 fl fz15">
                           可授项目：
                            </p>
                            <section class="ov fz15">
                    {{sd.grantProject}}
                            </section>
                        </li>
                         
                          <li class="mui-row">
                            <p class="sd_jh_det z3 fl fz15">
                           教学场地：
                            </p>
                            <section class="ov fz15">
                            石家庄
                            </section>
                        </li>
                        
                         <li class="mui-row">
                            <p class="sd_jh_det z3 fl fz15">
                          个人简历：
                            </p>
                            <section class="ov fz15 dian">
                            从事健身行业5年从事健身行业5年从事健身行业5年从事健身行业5年
                            </section>
                        </li>
                    </ul>
                
                </section>
                <p class="qc"></p>
            </section>
        </section>
        
        
         <section class="mt10 bgff pd pm10">
            <p class="fz16 z3 pt10 pm10">特色服务</p>
             <section class="asd_jh_deert">
                <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd"></i>
                    <p class="z3 fz12">
                    无线
                    </p>
                 </section>
     <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ab"></i>
                    <p class="z3 fz12">
                    洗浴
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ac"></i>
                    <p class="z3 fz12">
                    停车场
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ad"></i>
                    <p class="z3 fz12">
                    发票
                    </p>
                 </section>
                 
                  <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd"></i>
                    <p class="z3 fz12">
                    无线
                    </p>
                 </section>
     <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ab"></i>
                    <p class="z3 fz12">
                    洗浴
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ac"></i>
                    <p class="z3 fz12">
                    停车场
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ad"></i>
                    <p class="z3 fz12">
                    发票
                    </p>
                 </section>
                  <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd"></i>
                    <p class="z3 fz12">
                    无线
                    </p>
                 </section>
     <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ab"></i>
                    <p class="z3 fz12">
                    洗浴
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ac"></i>
                    <p class="z3 fz12">
                    停车场
                    </p>
                 </section>
                      <section class="dd_jhj_dert cen">
                        <i class="f_i dsfsdf_jhsd ad"></i>
                    <p class="z3 fz12">
                    发票
                    </p>
                 </section>
             </section>
        </section>
        
        
        
        
            <section class="bgff mt10">
                <p class="pd pt10 pm10 fz16 z3">
            商家信息
                    </p>
            <section class="fz15 pd btm pt10 pm10 z6 dsf_khj_deert">
    {{sd.venueIntro}}

            </section>
            
        </section>
        
    </div>
    
       
        
                                                           
                <map_tiaozhuang :venueAddr="sd.venueAddr" :latitude="sd.latitude" :longitude="sd.longitude"></map_tiaozhuang>
        
                                 
        
        
        

	</div>
</template>
<script>
    import map_tiaozhuang from "../components/map_tiaozhuang"
    export default {
        data() {
            return {
                show_er:true,
                jshbPrieduserList: "",
                jshbVenueImgList: "",
                sd: ""
            }
        },
        components: {
map_tiaozhuang
        },
        methods: {

        },
        mounted() {
            var params = {},
                th = this
            params.id = this.$route.query.id
            window.scrollTo(0, 0);
            this.post('serviceVenue', 'getVenueDetail', params, function(data) {
                console.log(data);
                th.sd = data.info.jshbVenue
                th.jshbPrieduserList = data.info.jshbPrieduserList
                th.jshbVenueImgList = data.info.jshbVenueImgList

            })
        },
    }

</script>
<style scoped>


</style>
