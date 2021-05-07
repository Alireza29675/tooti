import trackClicks from './trackers/click'
import trackInputs from './trackers/input'
import trackKeyboard from './trackers/keyboard'

import reportEvent from './utils/reportEvent'

import './stylesheets/style.css'

const start = () => {
  trackClicks(reportEvent('click'))
  trackInputs(reportEvent('input'))
  trackKeyboard(reportEvent('keyboard'))
}

if (!window._tootiBehaviourTrackerHasStarted) start();

window._tootiBehaviourTrackerHasStarted = true