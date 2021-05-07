const addTemporaryClass = (element, className, duration = 500) => {
  element.classList.add(className)
  setTimeout(() => {
    element.classList.remove(className)
  }, duration)
}

export default function (reportEvent) {
  document.addEventListener('click', e => {
    addTemporaryClass(e.target, 'tooti-clicked-item')
    reportEvent({
      payload: {
        path: window.tooti.cssPath(e.target),
      },
      type: 'click'
    })
  }, true);
}