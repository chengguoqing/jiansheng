<!--活动-->
<template>
	<div >
           <header class="mui-bar mui-bar-nav asd_uy_dftx head_height">
                 <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back" v-if="type_p==1"/>
            <h1 class="mui-title ls "> {{type_p==1?'赛事列表':"最新活动"}}</h1>
        </header>

     <div class="  mui-scroll-wrapper df_jh_deertty ab" ref="mui_scroll">
         
	<div class="mui-scroll">
	    <huodong_list ></huodong_list>
    </div>
    </div>
<dibu :active="2" v-if="type_p!=1"></dibu>
	</div>
</template>
<script>
    import huodong_list from "../components/huodong_list"
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                type_p: this.$route.query.type
            }
        },
        components: {
            huodong_list,
            dibu
        },
        methods: {

        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
    }

</script>
<style scoped>


</style>
