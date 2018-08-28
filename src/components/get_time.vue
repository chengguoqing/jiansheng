<template>
	<div class="pr">
	<p class="jgh_deert" v-if="show" @click="$emit('close')"></p>
     <van-popup v-model="show" position="bottom" :overlay="false">

        <van-datetime-picker
  v-model="currentDate"
  type="date"
:formatter="formatter"
@cancel="$emit('close')"
@confirm="wancher"
/>

    </van-popup>
        
        
	</div>
</template>
<script>
        import base from "../js/base.js"
    export default {
        props: {
            show: ""
        },
        data() {
            return {
                currentDate: new Date()
            }
        },
        components: {

        },
        methods: {
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;

            },
            wancher(e) { //日期完成按钮触发
                this.$emit('settime',base.time_er(e))
            },
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .jgh_deert{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1
    }

</style>
