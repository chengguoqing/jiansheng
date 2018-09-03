<!--发布邀约-->
<template>
	<div >
		 <header class="mui-bar mui-bar-nav asd_uy_dftx">
     <van-icon name="arrow-left"  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">发布邀约</h1>
  <a class="mui-action-back  mui-pull-right">
     
        </a>
    </header>
        
        
    <div class="mui-content " id="seek_apper">
        <section class="bgff pd">
            <p class="pt10 fz16 z3">项目选择</p>
            <section class="mui-row mt10">
                <section class="mui-col-xs-4 sdf_deertx" v-for="sd in 15">
                    <button class="fz14 dfs_jh_derer">篮球</button>
                </section>
            </section>
        </section>   
        
            
        <section class="mt10">
    <van-cell-group>
        <van-cell title="时间" value="请选择您的时间" is-link />
         <van-cell title="地点" value="请选择要约地址" is-link />
         <van-cell title="对象" value="请选择" is-link />
         <van-cell title="类型" value="请选择" is-link />
         <van-cell title="我的邀约" value="" is-link />
         <van-cell title="邀约说明" value="请填写邀约说明" is-link />
    </van-cell-group>
    </section>
    </div>
        
        
        <section class="sd_jerth_deet mui-row">
  
                <button class="mui-btn-red" >发布</button>
     
    </section>
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
    .dfs_jh_derer{
        padding: 0px;
        width: 90px;
        height: 30px;
        background: #EEEDED;
        margin-bottom: 10px;
        
    }
     .sd_jerth_deet{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        line-height: 50px;
        height: 50px;
    }
    .sd_jerth_deet button{
        width: 100%;
        padding: 0px;
        border: 0px;
        font-size: 16px;
        border-radius: 0px;
    }
 
</style>
