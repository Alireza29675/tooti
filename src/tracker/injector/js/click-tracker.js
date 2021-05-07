const addTemporaryClass = (element, className, duration = 500) => {
  element.classList.add(className)
  setTimeout(() => {
    element.classList.remove(className)
  }, duration)
}

document.addEventListener('click', e => {
  addTemporaryClass(e.target, 'tooti-clicked-item')
  window.reportEvent({
    payload: {
      path: window.tooti.cssPath(e.target),
    },
    type: 'click'
  })
}, true);