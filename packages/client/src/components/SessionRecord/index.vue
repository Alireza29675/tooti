<template>
  <div class="session-record">
    <SessionRecordForm />
  </div>
</template>

<script>
import SessionRecordForm from "./SessionRecordForm.vue";

export default {
  name: 'SessionRecord',
  components: {
    SessionRecordForm
  }
}
</script>