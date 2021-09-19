import trackClicks from './trackers/click'
import trackFocuses from './trackers/focus'

import './views/selection-preview'

import reportEvent from './utils/reportEvent'

import './stylesheets/style.css'

const start = () => {
  trackClicks(reportEvent('click'))
  trackFocuses(reportEvent('focus'))
}

if (!window._tootiBehaviourTrackerHasStarted) start();

window._tootiBehaviourTrackerHasStarted = true