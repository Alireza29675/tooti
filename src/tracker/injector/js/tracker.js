document.addEventListener('click', e => reportEvent({
  payload: {
    path: window.sess.cssPath(e.target),
  },
  type: 'click'
}), true);