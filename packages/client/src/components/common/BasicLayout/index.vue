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
  direction: rtl;
  font-family: "Vazir", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.basic-layout {
  &__header {
    position: sticky;
    top: 0;
  }

  &__container {
    width: 1000px;
    margin: 0 auto;
  }
}
</style>
