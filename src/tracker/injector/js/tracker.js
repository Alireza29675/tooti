document.addEventListener('click', e => window.reportEvent({
  payload: {
    path: window.sess.cssPath(e.target),
  },
  type: 'click'
}), true);