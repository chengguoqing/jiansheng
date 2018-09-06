<!--购票详情-->
<template>
	<div >
	   <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15  mui-action-back" />
        <h1 class="mui-title z3">购票详情</h1>
  <a class="  mui-pull-right">
        <i class="f_i mao_icosst" @click="$store.state.is_map=true"></i>
        </a>
    </header>
        
        
          <div class="mui-content " id="seek_apper">
              <img :src="sd.showImg" class="w100 cz" style="width:375px;height:220px;">
              <section class="pd pt10 pm10 bgff mui-row">
                   <section class="mui-col-xs-12">
                         <p class="fz16 z3 pt8">{{sd.showName}}</p>
                       <p class="mt2 pt8" >
                             <i class="f_i time_icon_eer"></i>
                           <span class="fz12 z9">{{sd.showDate}}</span>
                        </p>
                        <p class="fz12 z9 pt8">{{sd.showPlace}}</p>
                    </section>
                    <!--
                    <section class="ov fz14 tr pt10">
                        3人已预订
                    </section>
                    -->
                </section>
              
              <section class="pd pt10 pm10 bgff mt10">
                    <p class="fz16 z3">图文介绍</p>
                  <p class="z3 fz14 sf_jh_deert">
      {{sd.showDescribe}}
                    </p>
                  <!--<img src="../assets/img/ddfd_e.jpg"  class="w100">-->
 <!--                      <p class="z3 fz14 sf_jh_deert">
      石家庄市裕彤国际体育中心,位于石家庄市长安区。
  处于城市中轴线的商业带中山路与体育大街交叉口东
  南，距市中心(解放广场-解放纪念碑)3.5公里 、火车
  站8公里，距石家庄正定国际机场机场15公里。
                    </p>-->
            </section>
              
                <section class="pd pt10 pm10 bgff mt10">
                    <section class="bill-img-box">
                     <p>
                        <span v-for="item in sdImgList"><img :src="item.img"/></span>
                    </p>
                    </section>               
                </section>
              {{sd.jshbShowImgList}}
                  <section class="pd pt10 pm10 bgff mt10">
                    <p class="fz16 z3">购买须知</p>
                   <p class="z3 fz14 sf_jh_deert">
{{sd.noticeItem}}
    </p>
    </section>
              
              
              
              
    </div>
        
	  <map_tiaozhuang :venueAddr="sd.venueAddr" :latitude="sd.latitude" :longitude="sd.longitude"></map_tiaozhuang>

     <div class="footer-base" :class="sd.state == 2 ? '' : 'active'"  @click="goNextOption" v-if="sd.state == 1">
      <span class="base-only" >立即订购</span>
    </div>
    <div class="footer-base"  v-else>
      <span class="base-only end" >立即订购</span>
    </div>


	</div>
</template>
<script>
import map_tiaozhuang from "../components/map_tiaozhuang";
export default {
  data() {
    return {
      sd: {},
      sdImgList: {}
    };
  },
  components: {
    map_tiaozhuang
  },
  methods: {
    showMaps: function() {
      if (
        "Android" === plus.os.name &&
        navigator.userAgent.indexOf("StreamApp") > 0
      ) {
        plus.nativeUI.toast("当前环境暂不支持地图插件");
        return;
      }
      var ws = plus.webview.currentWebview();
      var wm = plus.webview.getWebviewById(plus.runtime.appid);
      wm && wm.evalJS("preateClear()");
      clicked("maps_map.html", false, true);
    }
  },
  mounted() {
    let th = this;
    this.post(
      "serviceShow",
      "getShowDetail",
      { id: this.$route.query.id },
      function(data) {
        th.sd = data.info.jshbShowDetails;
        th.sdImgList = data.info.jshbShowImgList;
        //console.log(JSON.stringify(data.info.jshbShowImgList));
         console.log(JSON.stringify(data));
      }
    );
  }
};
</script>
<style scoped>
.time_icon_eer {
  width: 19px;
  height: 19px;
  background-position: -63px -236px;
}
.footer-base{
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 8;
    padding: 10px 0;
}
.sf_jh_deert {
  text-indent: 20px;
  line-height: 1.6;
  margin-top: 10px;
}
.base-only{
    width: 96%;
    background: #f70;
    color: #fff;
    line-height: 40px;
    display: block;
    margin-left: 2%;
    text-align: center;
    border-radius: 5px;
}
.footer-base .end{
    background: #ccc;
}
</style>
