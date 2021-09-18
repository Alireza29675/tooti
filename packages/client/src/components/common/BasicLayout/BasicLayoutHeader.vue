<template>
  <div class="basic-layout-header">
    <img class="basic-layout-header__logo" src="/logo.png" />
    <el-menu
      :default-active="activeIndex"
      router
      class="basic-layout-header__menu"
      mode="horizontal"
    >
      <el-menu-item index="/">Run a Session</el-menu-item>
      <el-menu-item index="/create">Create a New Session</el-menu-item>
      <el-menu-item index="/about">About This App</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BasicLayoutHeader',
  data() {
    return {
      activeIndex: this.$route.path
    }
  },
  watch: {
    $route(to) {
      this.activeLink = to.path;
    }
  },
}
</script>

<style lang="scss">
.basic-layout-header {
  background-color: #fff;
  padding: 1rem;
  text-align: center;

  &__menu {
    margin-top: 1rem;
    justify-content: center;
  }

  &__title {
    font-size: 2.5rem;
    margin: 0;
  }

  &__logo {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
  }
}
</style>