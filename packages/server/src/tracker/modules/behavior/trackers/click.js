import findSelector from '../utils/findSelector'

export default function({ element, emit }) {
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    emit('click', {
      path: findSelector(e.target),
    })
  })
}
