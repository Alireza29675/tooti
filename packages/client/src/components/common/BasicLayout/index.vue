<template>
  <div class="basic-layout">
    <BasicLayoutHeader />
    <slot />
  </div>
</template>

<script>
import BasicLayoutHeader from "./BasicLayoutHeader.vue";
export default {
  name: 'BasicLayout',
  components: {
    BasicLayoutHeader
  }
}
</script>

<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.basic-layout {
  
}
</style>
