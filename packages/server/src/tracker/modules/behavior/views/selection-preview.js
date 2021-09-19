import observe from '../utils/observe'

const selection = {
  current: null,
}

// Creating the box
const box = document.createElement('div');
box.className = 'selector-preview';
document.body.appendChild(box);

// Start observing
observe(document.body, (mutations) => {
  mutations.forEach(item => registerWithChildren(item.target))
})

const registeredElements = new Set()

const registerWithChildren = (root) => {
  register(root)
  root.querySelectorAll('*').forEach(register)
}

const register = (element) => {
  if (registeredElements.has(element)) return
  registeredElements.add(element)
  onMutation(element)
}

function onMutation(element) {
  element.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    selection.current = element;

    const { top, left, width, height } = element.getBoundingClientRect()

    box.style.top = (top + scrollY) + 'px';
    box.style.left = (left + scrollX) + 'px';
    box.style.width = width + 'px';
    box.style.height = height + 'px';
  })
}

registerWithChildren(document.body)

export default selection