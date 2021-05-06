document.addEventListener('click', e => reportEvent({
  targetName: window.sess.cssPath(e.target),
  eventType: 'click'
}), true);