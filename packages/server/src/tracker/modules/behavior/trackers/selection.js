// Creating the box
const box = document.createElement('div');
box.className = 'selector-preview';
document.body.appendChild(box);

document.body.addEventListener('mousemove', (e) => {
  const { top, left, width, height } = e.target.getBoundingClientRect()

  box.style.top = (top + scrollY) + 'px';
  box.style.left = (left + scrollX) + 'px';
  box.style.width = width + 'px';
  box.style.height = height + 'px';
})