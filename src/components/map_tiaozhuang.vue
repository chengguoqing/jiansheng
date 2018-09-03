<!--打开地图-->
<template>
	<div >
	        <van-popup v-model="$store.state.is_map" position="bottom" >
<van-cell-group class="cen">
    <van-cell title="高德地图" @click="hf_gaode" />
 <van-cell title="百度地图"  @click="hf_baidu"/>
    <van-cell title="取消" class="dfgdf_deert" @click="$store.state.is_map=false"/>
</van-cell-group>
                   </van-popup>
        
	</div>
</template>
<script>
    export default {
        props: {
            venueAddr: "",
            latitude:"",
            longitude:""
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
                location.href = "baidumap://map/direction?origin=&destination="+this.venueAddr+"&mode=driving"
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
