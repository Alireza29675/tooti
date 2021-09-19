import unique from 'unique-selector';

export default function (reportEvent) {
  document.addEventListener('click', e => {
    reportEvent({ path: unique(e.target) })
  }, true);
}