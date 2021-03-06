import { addMutation, startObservation } from './utils/observe'

import './stylesheets/style.css'

import './trackers/selection'
import './trackers/click'

import trackFocus from './trackers/focus'
import trackTyping from './trackers/typing'

const start = () => {
  addMutation(trackFocus)
  addMutation(trackTyping)
  startObservation()
}


if (!window._tootiBehaviourTrackerHasStarted) start();

window._tootiBehaviourTrackerHasStarted = true