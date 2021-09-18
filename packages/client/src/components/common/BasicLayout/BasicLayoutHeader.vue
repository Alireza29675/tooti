<template>
  <div class="basic-layout-header">
    <img class="basic-layout-header__logo" src="/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'BasicLayoutHeader',
}
</script>

<style lang="scss">
.basic-layout-header {
  background: #fff;
  padding: 1rem;

  &__logo {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
  }
}
</style>