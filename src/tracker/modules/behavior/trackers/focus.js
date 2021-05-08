import unique from 'unique-selector';

export default function(reportEvent) {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.addEventListener('focus', (e) => {
      reportEvent({
        path: unique(e.target),
      })
    })
  }
}
