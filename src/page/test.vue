<template>
	<div >
 <header class="mui-bar mui-bar-nav asd_uy_dftx">
            <van-icon name="arrow-left" class="mui-pull-left z3 mt15  mui-action-back" />
            <h1 class="mui-title z3">标题</h1>
         
        </header>
	

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
            mui.plusReady(function() {
                var w = plus.webview.create('https://www.fitness-partner.cn/bill/a/index.html#/activityDetailapp/4d697dc8c69043f8a4430ad802f96534', 'test', {
                    top:'60px'
                });
                w.show(); // 显示窗口
            })

        },
    }

</script>
<style scoped>


</style>
