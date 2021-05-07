const keysToTrack = ['Enter', 'Escape', 'Tab']

export default function (reportEvent) {    
  document.addEventListener('keydown', ({ key }) => {
    if (!keysToTrack.includes(key)) {
      return;
    }
    
    reportEvent({
      payload: { key },
      type: 'keyboard'
    })
  })
}
