<template>
	<div >
	
 	   <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15  "  @click="$router.back(-1)"/>
        <h1 class="mui-title z3">选择城市</h1>

    </header>

			<section class=" pr mui-content ">
            
                <section v-for="sd in chengsh">
                    <p class="pd pt5 pm5 z3">{{sd.name}}</p>
                    <van-cell-group>
                        <van-cell :title="sf" v-for="sf in sd.data" @click="ss_dff(sf)"/>
                    </van-cell-group>
            </section>
                
    </section>
        
	</div>
</template>
<script>
    export default {
        data() {
            return {
                ssd_sd: "",
                chengsh: [{
                    name: "B",
                    data: [
                        "保定",
                        "北京"
                    ]
                }, {
                    name: "C",
                    data: [
                        "沧州",
                        "承德"
                    ]
                }, {
                    name: "H",
                    data: [
                        "邯郸",
                        "衡水"
                    ]
                }, {
                    name: "L",
                    data: [
                        "廊坊"
                    ]
                }, {
                    name: "Q",
                    data: [
                        "秦皇岛"
                    ]
                }, {
                    name: "S",
                    data: [
                        "沈阳",
                        "石家庄"
                    ]
                }, {
                    name: "T",
                    data: [
                        "唐山",
                        "天津"
                    ]
                }, {
                    name: "X",
                    data: [
                        "邢台"
                    ]
                }, {
                    name: "Z",
                    data: [
                        "张家口"
                    ]
                }]
            }
        },
        components: {

        },
        methods: {
        
            ss_dff(chengs) {
                this.$store.state.venueCity=chengs
                 plus.storage.setItem("chengshi", chengs);
                this.hf('yuechangguan_list')
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
