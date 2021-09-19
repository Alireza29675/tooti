import findSelector from '../utils/findSelector'

export default function (reportEvent) {
  document.addEventListener('click', e => {
    reportEvent({ path: findSelector(e.target) })
  }, true);
}