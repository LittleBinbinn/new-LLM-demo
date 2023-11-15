<script setup >
import { RouterView } from 'vue-router';


</script>

<template>
  <keep-alive>
     <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</template>

<style >
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
}
</style>