import findSelector from '../utils/findSelector'

export default function ({ element, emit }) {
  if (element.localName !== 'input') return;
  
  element.addEventListener('keyup', (e) => emit('change', {
    path: findSelector(e.target),
    value: e.target.value
  }))
}
