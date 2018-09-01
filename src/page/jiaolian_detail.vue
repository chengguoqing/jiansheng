<template>
	<div >
	<header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)"/>
        <h1 class="mui-title z3">教练详情</h1>

    </header>
    <div class="mui-content " id="seek_apper">
        <section class="pd pt20 pm10">
            <img src="img/dsfd_sd.jpg" class="yj user_icoeer fl">
            <section class="ov pl10">
                <p class="fz16 z3 mt5">施展</p>
                <p class="z9 fz12 mt2"> 
                    年龄：27岁 身高：169CM 体重：47kg
                </p>
            </section>
            <p class="qc"></p>
        </section>
        <section class="btm pt10 pm10 box cen dfg_ceeert bbm">
            <p class="box_a z3" v-for="(sd,idx) in usde_r" @click="sd_ddfg(sd,idx)">
                <span :class="sd.cls">{{sd.name}}</span>
            </p>
        </section>
        
        
        <section v-if="id_ddf==0">
            <p class="cen mt100">
                <img src="img/dsf_sdf.png" class="dsf_sdf_eer">
            </p>
        
        </section>
        
        <section v-if="id_ddf==1">
            <p class="pd pt10 pm10 z3">
            瑜伽、太极拳、舞蹈、游泳
            </p>
        
        </section>
        
             <section v-if="id_ddf==2">
            <p class="pd pt10 pm10 z3">
            河北省石家庄市某街某巷某号某楼
            </p>
        
        </section>
        
        
             <section v-if="id_ddf==3">
            <p class="pd pt10 pm10 z3 dfser_jh_deer">
            毕业于石家庄经济学院，持有计算机和五笔证书，在
校期间进修瑜伽至今已有5年多， 现持有高级瑜伽导师证
书和各种瑜伽特色课程证书，擅长哈他瑜伽。
            </p>
        
        </section>
            <section v-if="id_ddf==4">
            <p class="pd pt10 pm10 z3 tr">
          2/9
            </p>
                <img src="img/ddfd_e.jpg" class="w100">
        
        </section>


    </div>

	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            let th = this
            console.log({id:this.$route.query.id})
            this.post('serviceCourse', 'getPrieduserDetail', {id:this.$route.query.id}, function(data) {
                console.log(data);
            })
        },
    }

</script>
<style scoped>


</style>
