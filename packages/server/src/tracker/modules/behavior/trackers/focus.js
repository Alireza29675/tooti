import findSelector from '../utils/findSelector'

export default function ({ element, emit }) {
  if (element.localName !== 'input') return;
  
  element.addEventListener('focus', (e) => emit('focus', {
    path: findSelector(e.target),
  }))
}
