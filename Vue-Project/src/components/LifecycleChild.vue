<template>
  <div>
    <p>this is Lifecycle child!</p>
    <p>child component's status is {{radioFlag}}</p>
  </div>
</template>

<script>
  export default {
    name: "LifecycleChild",
    props:["radioFlag"],
    mounted() {
      console.log("mounted-child")
      console.log(this);
    },
    beforeCreate(){
      console.log("beforeCreate-child")
      console.log(this);
    },
    created(){
      console.log("created-child")
      console.log(this);
    },
    beforeMount(){
      console.log("beforeMount-child")
      console.log(this);
    },
    beforeUpdate(){
      console.log("beforeUpdate-child")
      console.log(this);
    },
    updated(){
      console.log("updated-child")
      console.log(this);
    },
    beforeDestroy(){
      console.log("beforeDestroy-child")
      console.log(this);
    },
    destroyed(){
      console.log("destroyed-child")
      console.log(this);
    },
    activated(){
      console.log("activated-child")
      console.log(this);
    },
    deactivated(){
      console.log("deactivated-child")
      console.log(this);
    },
  }
</script>

<style scoped>

</style>
