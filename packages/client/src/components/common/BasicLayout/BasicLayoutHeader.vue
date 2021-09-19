<template>
  <div class="basic-layout-header">
    <img class="basic-layout-header__logo" src="/logo.png" />
    <el-menu
      :default-active="activeLink"
      class="basic-layout-header__menu"
      mode="horizontal"
      @select="onMenuSelect"
    >
      <el-menu-item index="/">اجرای جلسات ضبط شده</el-menu-item>
      <el-menu-item index="/record">ضبط یک جلسه جدید</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BasicLayoutHeader',
  data() {
    return {
      activeLink: ''
    }
  },
  methods: {
    onMenuSelect(route) {
      this.$router.push(route)
    }
  },
  watch: {
    $route(to) {
      this.activeLink = to.path
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