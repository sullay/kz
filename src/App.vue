<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  max-width: 450px;
  min-width: 375px;
  font-family: "Noto Sans S Chinese";
  position: relative;
  margin: 0 auto;
}
</style>
