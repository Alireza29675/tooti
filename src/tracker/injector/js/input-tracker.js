const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.addEventListener('change', (e) => {
    window.reportEvent({
      payload: {
        text: e.target.value,
        path: window.tooti.cssPath(e.target),
      },
      type: 'input'
    })
  })
}