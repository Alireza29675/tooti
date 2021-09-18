<template>
  <div class="basic-layout">
    <BasicLayoutHeader />
    <div class="basic-layout__container">
      <slot />
    </div>
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
  &__container {
    width: 1000px;
    margin: 0 auto;
  }
}
</style>
