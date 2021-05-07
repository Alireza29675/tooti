import { MAIN_KEYS } from './common/keys'

export default function (reportEvent) {    
  document.addEventListener('keydown', ({ key }) => {
    if (!MAIN_KEYS.includes(key)) {
      return;
    }
    
    reportEvent({ key })
  })
}
