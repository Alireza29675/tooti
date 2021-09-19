<template>
  <div class="session-list-empty">
    <el-empty description="جلسه‌ی ضبط شده‌ای برای اجرا وجود ندارد" />
    <el-button type="primary" @click="goToRecordTab">
      ضبط یک جلسه جدید
      <i class="el-icon-plus" />
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SessionListEmpty',
  methods: {
    goToRecordTab() {
      this.$router.push('/record');
    }
  },
}
</script>

<style lang="scss">
.session-list-empty {
  text-align: center;
}
</style>