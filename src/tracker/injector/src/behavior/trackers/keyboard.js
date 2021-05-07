(() => {
  window.tooti = window.tooti || {}

  const start = () => {
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
  }

  // prevent multiple implementations
  if (!window.tooti._keyboardTrackerIsActive) {
    start();
  }
  window.tooti._keyboardTrackerIsActive = true
})()