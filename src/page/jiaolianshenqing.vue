<template>

	<section >
    <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <van-icon name="arrow-left "  class="mui-pull-left z3 mt15 mui-action-back"/>
        <h1 class="mui-title z3">教练申请</h1>
  <a class=" mui-pull-right" @tap="hf('zhengjianshangchuan')">
        <i class="f_i mao_icosst ab"></i>
        </a>
    </header>
    <div class="mui-content " >
           <form class="mui-input-group">
            <div class="mui-input-row">
                <label class="fz16">姓 名</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的姓名">
            </div>
                  <div class="mui-input-row">
                <label class="fz16">身 高</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的身高（CM）">
            </div>
                  <div class="mui-input-row">
                <label class="fz16">体      重</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的体重（KG）">
            </div>
                  <div class="mui-input-row">
                <label class="fz16">性别</label>
                <section class="ov df_jh_derrt">
                      <span class="ml10">
                            <i class="f_i df_dinads act"></i> 男
                        </span>
                        <span class="ml10">
                            <i class="f_i df_dinads "></i> 女
                        </span>
                </section>
            </div>
                  <div class="mui-input-row">
                <label class="fz16">出生日期</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请选择出生日期">
            </div>
               
                  <div class="mui-input-row">
                <label class="fz16">身份证号</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的身份证号">
            </div>
           
               
               
                     <div class="mui-input-row">
                <label class="fz16">课 时 费</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的课时费（元/H）">
            </div>
                     <div class="mui-input-row">
                <label class="fz16">邀 请 码</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的邀请码">
            </div>
                     <div class="mui-input-row">
                <label class="fz16">教学经历</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的教学经历">
            </div>
               
               
               
               
               
                       <div class="mui-input-row">
                <label class="fz16">成      绩</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的成绩">
            </div>
               
                       <div class="mui-input-row">
                <label class="fz16">学      历</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的学历">
            </div>
                       <div class="mui-input-row">
                <label class="fz16">教学场地</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您所教学的场地位置">
            </div>
                       <div class="mui-input-row">
                <label class="fz16">上门服务</label>
                <section class="ov df_jh_derrt">
                      <span class="ml10">
                            <i class="f_i df_dinads act"></i> 支持
                        </span>
                        <span class="ml10">
                            <i class="f_i df_dinads "></i> 不支持
                        </span>
                </section>
            </div>
               
                       <div class="mui-input-row">
                <label class="fz16">资      质</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入资质">
            </div>
               
               
               
               <div class="mui-input-row">
                <label class="fz16">职业项目</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入职业项目">
            </div>
               <div class="mui-input-row">
                <label class="fz16">可授项目</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入可授项目">
            </div>
               <div class="mui-input-row">
                <label class="fz16">预约时间</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入预约时间">
            </div>
               <div class="mui-input-row">
                <label class="fz16">个人简历</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入个人简历">
            </div>
               <div class="mui-input-row">
                <label class="fz16">电话号码</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入电话号码">
            </div><div class="mui-input-row">
                <label class="fz16">所在城市</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入所在城市">
            </div>
               
               
               
               <div class="mui-input-row">
                <label class="fz16">开户行</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的开户行的名称">
            </div>
               
               <div class="mui-input-row">
                <label class="fz16">银行卡号</label>
                <input type="text" class="mui-input-clear fz15" placeholder="请输入您的银行账号">
            </div> 
               
        </form>
          <p class="cen mt20">
            申请注册即视为同意<a class="red">《健身伙伴服务协议》</a>
        </p>
        
        
        
        
          <a class="mui-btn mui-btn-red tuichuer_e" @click="tijiao">申请入驻</a>
    </div>
   </section>
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
 tijiao:function(){
                	mui.back()
                }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
