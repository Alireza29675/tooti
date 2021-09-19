<template>
  <div class="session-list-table">
    <el-table class="session-list-table__table" :data="sessions" stripe>
      <el-table-column prop="title" label="عنوان"></el-table-column>
      <el-table-column prop="url" label="آدرس شروع"></el-table-column>
      <el-table-column class="session-list-table__run-column" label="اجرا" width="100" v-slot="{ id }">
        <el-button
          class="session-list-table__run-button"
          type="primary"
          size="mini"
          @click="runSession(id)"
        >
          <i class="el-icon-video-play"></i>
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SessionListTable',
  props: {
    sessions: {
      type: Array,
      required: true
    },
  },
  methods: {
    runSession(id) {
      this.$http.post(`/sessions/${id}`)
    }
  },
}
</script>

<style lang="scss">
.session-list-table {
  &__table {
    width: 100%;
    
    * {
      text-align: right;
    }
  }

  &__run-button {
    font-size: 1.5rem;
  }

  &__run-column * {
    text-align: center;
  }
}
</style>