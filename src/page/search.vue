<template>
	<div  class="bgff pm20">
	 <section id="seek_apper">
    <header class="mui-bar mui-bar-nav  mui-row df_jh_deet">
          <section class="mui-col-xs-10 pr ss_jh_deert">
              <i class="f_i ssd_jh_er"></i>
                <input type="search" placeholder="" v-model="ssd_sd" autofocus="true">
        </section>
        <section class="mui-col-xs-2 fz16 cen df_hj_derty">
                
                <span v-if="ssd_sd">搜索</span>
                <span v-else  @tap="sd_jh_de">取消</span>
        </section>
        
        </header>

			<section class=" pr mui-content">
                
                <section class="pd pt40">
                    <p class="z3 fz18 cen">大家都在搜</p>
                
                    <p class="cen mt20">
                        <span class="sd_jh_cdert">最好的场馆</span>
                    </p>
                    
                      <p class="cen mt20">
                        <span class="sd_jh_cdert">健身</span>
                    </p>
                      <p class="cen mt20">
                        <span class="sd_jh_cdert">羽毛球</span>
                    </p>
                </section>
                
                <section class="pd mt40 pt10 btm">
                    <span>历史记录</span>
                    <i class="f_i dele_ddret"></i>
                    
                    <p class="z6 mt10">
                        桥东区<br>
                        最近的 <br>
                        运动<br>
                        乒乓球
                    </p>
                    
                </section>
                
                
        </section>
        
        
        </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                ssd_sd: ""
            }
        },
        components: {

        },
        methods: {
            sd_jh_de: function() {
                mui.back()
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
