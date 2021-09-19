const selection = {
  current: null,
}

// Creating the box
const box = document.createElement('div');
box.className = 'selector-preview';
document.body.appendChild(box);

export default ({ element }) => {
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