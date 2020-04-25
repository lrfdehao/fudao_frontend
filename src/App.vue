<template>
  <div id="main" class="app-main">
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {
        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style>
  html,body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .app-main {
    width: 100%;
    height: 100%;
  }

  .main-frame {
    height: calc(100% - 60px);
    /*width: calc(100% - 240px);*/
    width: 100%;
    padding: 10px;
    background: #F0F0F0;
    top: 60px;
    position: absolute;
    overflow: auto;
  }

  .main {
    height: 100%;
  }
</style>