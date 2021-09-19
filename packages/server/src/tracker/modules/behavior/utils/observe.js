import emit from "./emit"

const registeredElements = new Set()
const mutationFunctions = []

function observe(targetNode, callback) {
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, {
    subtree: true,
    childList: true,
    characterData: true
  });
}

function registerWithChildren(root) {
  register(root)
  root.querySelectorAll('*').forEach(register)
}

function register(element) {
  if (registeredElements.has(element)) return
  registeredElements.add(element)
  mutationFunctions.forEach(func => func({
    element,
    emit
  }))
}

export function addMutation(func) {
  mutationFunctions.push(func)
}

export function startObservation() {
  observe(document.body, (mutations) => {
    mutations.forEach(item => registerWithChildren(item.target))
  })
  registerWithChildren(document.body)
}