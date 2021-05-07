export default (eventType) => (payload) => window.reportEvent({
  type: eventType,
  payload
})