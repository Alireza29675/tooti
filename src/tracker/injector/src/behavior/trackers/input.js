import cssPath from '../utils/css-path'
import { MAIN_KEYS } from './common/keys'

export default function(reportEvent) {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    input.addEventListener('input', (e) => {
      // If pressed enter or tab or escape
      if (MAIN_KEYS.includes(e.key)) {
        return;
      }

      reportEvent({
        text: e.target.value,
        path: cssPath(e.target),
      })
    })
  }
}
