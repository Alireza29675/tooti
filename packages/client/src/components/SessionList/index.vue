<template>
  <div class="session-list">
    <SessionListEmpty />
  </div>
</template>

<script>
import SessionListEmpty from './SessionListEmpty.vue';

export default {
  name: 'SessionList',
  components: {
    SessionListEmpty
  }
}
</script>

<style lang="scss">
.session-list {
}
</style>