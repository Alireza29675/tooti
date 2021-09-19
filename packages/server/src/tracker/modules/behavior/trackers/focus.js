import findSelector from '../utils/findSelector'

export default function(reportEvent) {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.addEventListener('focus', (e) => {
      reportEvent({
        path: findSelector(e.target),
      })
    })
  }
}
