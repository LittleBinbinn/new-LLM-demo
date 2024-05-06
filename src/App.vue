<script setup >

import { RouterView } from 'vue-router';
const aliveComponents = ["chat","database"]

</script>

<template>
 <router-view v-slot="{ Component }">
    <keep-alive :include = aliveComponents >
      <component :is="Component" :key="$route.fullPath"/>
    </keep-alive>
  </router-view>
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