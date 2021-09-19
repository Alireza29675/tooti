<template>
  <div class="session-list-table">
    <el-table class="session-list-table__table" :data="sessions" stripe>
      <el-table-column prop="title" label="عنوان"></el-table-column>
      <el-table-column prop="url" label="آدرس شروع"></el-table-column>
      <el-table-column class="session-list-table__run-column" width="120" v-slot="{ row: { id } }">
        <el-button-group>
          <el-button
            class="session-list-table__run-button"
            type="danger"
            size="mini"
            @click="deleteSession(id)"
          >
            <i class="el-icon-delete"></i>
          </el-button>
          <el-button
            class="session-list-table__run-button"
            type="primary"
            size="mini"
            @click="runSession(id)"
          >
            <i class="el-icon-video-play"></i>
          </el-button>
        </el-button-group>
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
    },
    deleteSession(id) {
      this.$http.delete(`/sessions/${id}`).then(() => {
        this.$emit('refresh')
      })
    },
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
    font-size: 1rem;
  }
}
</style>