<template>
	<div >
	<header class="mui-bar mui-bar-nav asd_uy_dftx">
             <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">设置</h1>

    </header>
    <section class="mui-content " id="seek_apper">

        <ul class="mui-table-view mt0 fz16">

            <li class="mui-table-view-cell">
                <span>自动登录</span>
                <div class="mui-switch mui-switch-mini  " :class="is_sdf" @tap="is_sdf?is_sdf='':is_sdf='mui-active'">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
               
        </ul>
        
        <van-cell-group>
       
            <van-cell title="新消息通知" is-link />
                 <van-cell title="清理缓存" value="20M" />
               <van-cell title="关于健身伙伴" is-link />
        </van-cell-group>
        
        
        <a class="mui-btn mui-btn-red tuichuer_e" @click="zhu('login','slide-in-bottom')">退出登录</a>
        

    </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                is_sdf:""
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
