import findSelector from '../utils/findSelector'
import emit from "../utils/emit"

document.body.addEventListener('click', (e) => {
  console.log(e);
  emit('click', {
    path: findSelector(e.target),
  })
})
