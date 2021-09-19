<template>
  <div class="basic-layout">
    <BasicLayoutHeader class="basic-layout__header" />
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
  font-family: "Vazir", sans-serif;
}

body {
  direction: rtl;
  margin: 0;
  padding: 0;
}

.basic-layout {
  &__header {
    z-index: 999999;
    position: sticky;
    top: 0;
  }

  &__container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
