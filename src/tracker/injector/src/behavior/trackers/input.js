const NOT_ALLOWED_KEYS = ['Enter', 'Escape', 'Tab']

export default function(reportEvent) {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.addEventListener('input', (e) => {
      // If pressed enter or tab or escape
      if (NOT_ALLOWED_KEYS.includes(e.key)) {
        return;
      }

      reportEvent({
        payload: {
          text: e.target.value,
          path: window.tooti.cssPath(e.target),
        },
        type: 'input'
      })
    })
  }
}
