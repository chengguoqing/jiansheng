<!--下拉-->
<template>
	<div class="pr">
<!--        <p class="jgh_deert" v-if="show_er" @click="$emit('close')"></p>-->
        
	   <van-popup v-model="$store.state.is_select" position="bottom" >


             <van-picker
  show-toolbar
  :title="title_e"
  :columns="columns"
  value-key="name"
@cancel="$store.state.is_select=false"
@confirm="wancdrttx"

/>


             </van-popup>

	</div>
</template>
<script>
    export default {
        props: {
            title_e: "",
            show_er: "",
            columns: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            wancdrttx(e) {
                this.$store.state.is_select=false
                this.$emit('get_data',e)
            }
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
