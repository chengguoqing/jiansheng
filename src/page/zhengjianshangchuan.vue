 <template>
 	<div >
 	
  <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">证件上传</h1>

    </header>
    <section class="mui-content bgff" id="seek_apper">
            
        <section v-for="sd in df_ddrff">
            <p class="pd pt10 pm10 fz16 z3 ">{{sd.name}}</p>
            <section class="btm cen pt15 pm15 bbm" @click="sd_dfg(sd)">
                    <img src="../assets/img/zpsc.png" class="sd_jh_deeet" v-if="!sd.url_sd">
                     <img :src="sd.url_sd" class="sd_jh_deeetert" v-else>
            </section>
        </section>
       
        
        <a class="mui-btn mui-btn-red tuichuer_e" >确定</a>
        

    </section>

 	</div>
 </template>
 <script>
     export default {
         data() {
             return {
 df_ddrff:[
                    {
                        name:"身份证正面",
                        url_sd:""
                        
                    },{
                        name:"身份证反面",
                        url_sd:""
                        
                    },{
                        name:"资质证书",
                        url_sd:""
                        
                    }
                ]
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
 