<template>
	<div >
	 <header class="mui-bar mui-bar-nav asd_uy_dftx">
      <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">圣璐瑜伽北郡店</h1>
        <a class="mui-action-back  mui-pull-right">

        </a>
    </header>
    <div class="mui-content " id="seek_apper">

        <section class="pd pt10 pm15 dsf_j_deert pr">
            <section class="mui-row">
                <p class="mui-col-xs-8 cf fz16">
                    季卡（一个季度）
                </p>
 
                <p class="mui-col-xs-4 tr fz18">
                    <span class="red fz18">￥799</span>
                </p>
            </section>
            <p class="cf fz12 mt10">
                有效期至：2018年8月8日
            </p>

            <div class="mui-numbox dfs_jh_deeet fr" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" />
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>

            <p class="qc"></p>


            <p class="dsf_jh_ddrrt ov">
                <span class="sd_jh_deet" v-for="sd in 40"></span>

            </p>
        </section>
        
        <section class="mt10 bgff pd pt10 pm10">
                <p class="fz14 z3">
                        商品描述
                </p>
            <p class="z3 dfs_jh_deert">
              位于中华北大街与赵二街交叉口北行200米路西，
多名名师亲自授课，打造正统瑜伽教练培训的正式化、
严格化、规范化，授课教室1000于平米，格调高雅，
适合修习瑜伽
            </p>
        
        </section>
        
               <section class="mt10 bgff pd pt10 pm10">
                <p class="fz14 z3">
                        购买须知
                </p>
            <p class="z3 mt5">
            1.订单购买后必须在30分钟内付款有效；<br>
2.本电子卡需在有效期内使用有效；<br>
3.如需退款需要提前48小时申请。
            </p>
        
        </section>
        
        
        <section class="sdsf_JH_drer mui-row">
            <section class="mui-col-xs-8 cen fz16 red">
                ￥799（1张）
            </section>
            <section class="mui-col-xs-4">
                <a class="w100 mui-btn mui-btn-red sd_jh_edeett" @click="hfer('querendingdan',$route.query)">提交</a>
            </section>
        
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

        },
    }

</script>
<style scoped>


</style>
