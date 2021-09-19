<template>
  <div v-loading="loading">
    <SessionListEmpty v-if="!sessions.length" />
    <SessionListTable v-else :sessions="sessions" @refresh="fetchSessions" />
  </div>
</template>

<script>
import SessionListEmpty from './SessionListEmpty.vue';
import SessionListTable from './SessionListTable.vue';

export default {
  name: 'SessionList',
  components: {
    SessionListEmpty,
    SessionListTable
  },
  data() {
    return {
      loading: true,
      sessions: []
    }
  },
  mounted() {
    this.fetchSessions()
  },
  methods: {
    fetchSessions() {
      this.loading = true

      this.$http.get('/sessions').then(({ sessions }) => {
        this.sessions = sessions;
      }).finally(() => {
        this.loading = false
      })
    }
  },
}
</script>