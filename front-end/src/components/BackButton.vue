<template>
    <span class="go-back">
        <button @click="goBack"><i class="fas fa-chevron-circle-left"></i></button>
    </span>
  
</template>

<script>
export default {
    methods: {
        goBack(){
            return this.$router.go(-1)
        }
    }

}
</script>

<style scoped>
    button{
        background-color: white;
        border-radius: 20px;
        border: none;
        padding: 0;
        height: 0.8em;
        width:0.8em;
        color:#3E4352;
        font-size: 2em;
        position: absolute;
        top:5em;
        left:9em;
        display: flex;
    }
    i{
        position: absolute;
        top: -0.1em;
        left: -0.1em;
    }
</style>