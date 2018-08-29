<!--活动-->
<template>
	<div >
           <header class="mui-bar mui-bar-nav asd_uy_dftx head_height">
            <h1 class="mui-title ls ">最新活动</h1>
        </header>
        <div class="mui-content ">
	    <huodong_list ></huodong_list>
    </div>
<dibu :active="2"></dibu>
	</div>
</template>
<script>
    import huodong_list from "../components/huodong_list"
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

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
