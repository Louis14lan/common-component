<template>
  <div>
    <h1>this is Lifecycle father</h1>
    <input type="checkbox" v-model="radioFlag"></input>
    <label>选择框状态(默认否,false)：{{radioFlag}}</label>
    <!--<lifecycle-child :radio-flag="radioFlag"></lifecycle-child>-->
  </div>
</template>

<script>
  import LifecycleChild from "../components/LifecycleChild"
  export default {
    name: "LifecycleExample",
    data(){
      return{
        radioFlag:true
      }
    },
    components:{LifecycleChild},
    beforeCreate(){
      console.log("beforeCreate-father")
      console.log(this);
    },
    created(){
      console.log("created-father")
      console.log(this);
    },
    beforeMount(){
      console.log("beforeMount-father")
      console.log(this);
    },
    mounted(){
      console.log("mounted-father")
      console.log(this);
    },
    beforeUpdate(){
      console.log("beforeUpdate-father")
      console.log(this);
    },
    updated(){
      console.log("updated-father")
      console.log(this);
    },
    beforeDestroy(){
      console.log("beforeDestroy-father")
      console.log(this);
    },
    destroyed(){
      console.log("destroyed-father")
      console.log(this);
    },
    activated(){
      console.log("activated-father")
      console.log(this);
    },
    deactivated(){
      console.log("deactivated-father")
      console.log(this);
    },
  }
</script>

<style scoped>

</style>
