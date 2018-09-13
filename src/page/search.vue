<template>
	<div  class="bgff pm20">
	 <section id="seek_apper">
    <header class="mui-bar mui-bar-nav  mui-row df_jh_deet">
          <section class="mui-col-xs-10 pr ss_jh_deert">
              <i class="f_i ssd_jh_er"></i>
                <input type="search" placeholder="" v-model="ssd_sd" autofocus="true">
        </section>
        <section class="mui-col-xs-2 fz16 cen df_hj_derty">
                
                <span v-if="ssd_sd" @tap="ss_dff">搜索</span>
                <span v-else  @tap="sd_jh_de">取消</span>
        </section>
         
        </header>

			<section class=" pr mui-content">
                
                <section class="pd pt40">
                    <p class="z3 fz18 cen">大家都在搜</p>
                
                    <p class="cen mt20">
                        <span class="sd_jh_cdert" @click="hf('yuechangguan_list?text=最好的场馆')">最好的场馆</span>
                    </p>
                    
                      <p class="cen mt20">
                        <span class="sd_jh_cdert" @click="hf('yuechangguan_list?text=健身')">健身</span>
                    </p>
                      <p class="cen mt20">
                        <span class="sd_jh_cdert" @click="hf('yuechangguan_list?text=羽毛球')">羽毛球</span>
                    </p>
                </section>
                
                <section class="pd mt40 pt10 btm" v-if="sd_dertt">
                    <span>历史记录</span>
                    <i class="f_i dele_ddret" @click="qingkong_e"></i>
                    
                    <p class="z6 mt10">
                       <span v-for="(sd,idx) in sd_dertt" @click="hf('yuechangguan_list?text='+sd)" v-if="idx<5">{{sd}}<br></span> 
                       
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
                ssd_sd: "",
                sd_dertt:""
            }
        },
        components: {

        },
        methods: {
            sd_jh_de: function() {
                this.hf('')
            },
            ss_dff() {
                let sd_derer = ""
                if (plus.storage.getItem('list_d')) {
                    sd_derer = plus.storage.getItem('list_d') + ","
                }
                sd_derer += this.ssd_sd
                plus.storage.setItem("list_d", sd_derer)
                this.hf('yuechangguan_list?text=' + this.ssd_sd)

            },
            qingkong_e() {
                plus.storage.setItem("list_d", '');

                this.$dialog.alert({
                    title: '标题',
                    message: '历史记录清除成功'
                }).then(() => {
                     this.sd_dertt=""
                });
            }
        },
        mounted() {
            if (plus.storage.getItem('list_d')) {
                let sd_der=plus.storage.getItem('list_d').split(","),
                    sd_dertx=[]
                
                sd_der.map((a,b)=>{
                    sd_dertx[sd_der.length-b-1]=a
                    console.log(a);
                })
                if(this.$route.query.text){
                            this.ssd_sd=  this.$route.query.text
                }
      
                
                this.sd_dertt=sd_dertx
            }
        },
    }

</script>
<style scoped>


</style>
