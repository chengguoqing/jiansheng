<!--活动-->
<template>
	<div >
           <header class="mui-bar mui-bar-nav asd_uy_dftx head_height">
                 <van-icon name="arrow-left"  class="mui-pull-left z3 mt15" @tap="$router.back(-1)" v-if="type_p==1"/>
            <h1 class="mui-title ls "> {{type_p==1?'赛事列表':"最新活动"}}</h1>
        </header>
        <div class="mui-content ">
	    <huodong_list ></huodong_list>
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

        },
    }

</script>
<style scoped>


</style>
