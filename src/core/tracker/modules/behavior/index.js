import trackClicks from './trackers/click'
import trackFocuses from './trackers/focus'
import trackKeyboard from './trackers/keyboard'

import reportEvent from './utils/reportEvent'

import './stylesheets/style.css'

const start = () => {
  trackClicks(reportEvent('click'))
  trackFocuses(reportEvent('focus'))
  trackKeyboard(reportEvent('keyboard'))
}

if (!window._tootiBehaviourTrackerHasStarted) start();

window._tootiBehaviourTrackerHasStarted = true