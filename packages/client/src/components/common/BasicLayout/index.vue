<template>
  <div class="basic-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>

<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: #eee;
}

.basic-layout {
  
}
</style>
