import unique from 'unique-selector';

const addTemporaryClass = (element, className, duration = 500) => {
  element.classList.add(className)
  setTimeout(() => {
    element.classList.remove(className)
  }, duration)
}

export default function (reportEvent) {
  document.addEventListener('click', e => {
    addTemporaryClass(e.target, 'tooti-clicked-item')
    
    reportEvent({ path: unique(e.target) })
  }, true);
}