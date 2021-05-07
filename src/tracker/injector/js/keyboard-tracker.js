const keysToTrack = ['Enter', 'Escape', 'Tab']

document.addEventListener('keydown', ({ key }) => {
  if (!keysToTrack.includes(key)) {
    return;
  }

  window.reportEvent({
    payload: {
      key,
    },
    type: 'keyboard'
  })
})