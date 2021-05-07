(() => {
  window.tooti = window.tooti || {}

  const start = () => {
    const notAllowedKeys = ['Enter', 'Escape', 'Tab']

    const inputs = document.querySelectorAll('input');

    for (const input of inputs) {
      input.addEventListener('keyup', (e) => {
        // If pressed enter or tab or escape
        if (notAllowedKeys.includes(e.key)) {
          return;
        }

        window.reportEvent({
          payload: {
            text: e.target.value,
            path: window.tooti.cssPath(e.target),
          },
          type: 'input'
        })
      })
    }
  }

  // prevent multiple implementations
  if (!window.tooti._inputTrackerIsActive) {
    start();
  }
  window.tooti._inputTrackerIsActive = true
})()