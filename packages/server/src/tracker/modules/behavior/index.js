import { addMutation, startObservation } from './utils/observe'

import './stylesheets/style.css'

import trackSelection from './trackers/selection'
import trackClick from './trackers/click'
import trackFocus from './trackers/focus'
import trackTyping from './trackers/typing'

const start = () => {
  addMutation(trackSelection)
  addMutation(trackClick)
  addMutation(trackFocus)
  addMutation(trackTyping)

  startObservation()
}


if (!window._tootiBehaviourTrackerHasStarted) start();

window._tootiBehaviourTrackerHasStarted = true