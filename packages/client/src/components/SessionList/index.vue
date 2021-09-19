<template>
  <div>
    <SessionListEmpty v-if="!sessions.length" />
    <SessionListTable v-else :sessions="sessions" />
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
      sessions: []
    }
  },
  mounted() {
    this.$http.get('/sessions').then(({ sessions }) => {
      this.sessions = sessions;
    })
  },
}
</script>