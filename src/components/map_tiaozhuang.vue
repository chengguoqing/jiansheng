<!--打开地图-->
<template>
	<div >
	        <van-popup v-model="$store.state.is_map" position="bottom" >
<van-cell-group class="cen">
    <section  @tap="openMap">
    <van-cell title="高德地图" />
        </section>
      <section  @tap="hf_baidu" class="btm">
 <van-cell title="百度地图"  />
    </section>
    <section @click="$store.state.is_map=false">
        <van-cell title="取消" class="dfgdf_deert" />
    </section>

</van-cell-group>
                   </van-popup>
        
	</div>
</template>
<script>
    export default {
        props: {
            venueAddr: "",
            latitude: "",
            longitude: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            hf_gaode() {
                var sd_derer = "iosamap://navi?sourceApplication=applicationName&backScheme=applicationScheme&poiname=fangheng&poiid=BGVIS&lat=" + this.latitude + "&lon=" + this.longitude + "&dev=1&style=2"

                location.href = sd_derer
            },
            hf_baidu() {
                location.href = "baidumap://map/direction?origin=&destination=" + this.venueAddr + "&mode=driving"
            },

            openMap() {//打开百度地图
                var url = "";
                switch (plus.os.name) {
                    case "Android":
                        url = "geo:"+this.latitude+","+this.longitude+"?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82";
                        break;
                    case "iOS":
                        url = "http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll="+this.latitude+","+this.longitude+"&spn=0.008766,0.019441";
                        break;
                    default:
                        return;
                        break;
                }
                plus.runtime.openURL(url, function(e) {
                    plus.nativeUI.alert("检查到您未安装地图程序\n");
                });
            },
            openAMap() {//打开高德地图
                var url = null,
                    id = null,
                    f = null;
                switch (plus.os.name) {
                    case "Android":
                        // 规范参考官方网站：http://lbs.amap.com/api/uri-api/android-uri-explain/
                        url = "androidamap://viewMap?sourceApplication=HelloH5&poiname=DCloud&lat=" + this.latitude + "&lon=" + this.longitude + "&dev=0";
                        f = androidMarket;
                        id = "com.autonavi.minimap";
                        break;
                    case "iOS":
                        // 规范参考官方网站：http://lbs.amap.com/api/uri-api/ios-uri-explain/
                        url = "iosamap://viewMap?sourceApplication=HelloH5&poiname=DCloud&lat=" + this.latitude + "&lon=" + this.longitude + "&dev=0";
                        f = iosAppstore;
                        id = "itunes.apple.com/cn/app/gao-tu-zhuan-ye-dao-hang-ban/id461703208?mt=8";
                        break;
                    default:
                        return;
                        break;
                }
                plus.runtime.openURL(url, function(e) {
                    plus.nativeUI.confirm("检查到您未安装\"高德地图\"，是否到商城搜索下载？", function(i) {
                        if (i.index == 0) {
                            f(id);
                        }
                    });
                }, id);
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfgdf_deert {
        padding-top: 13px;
    }

    .dfgdf_deert::after {
        border-top: 10px solid #e5e5e5;
    }

</style>
