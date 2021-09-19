import unique from 'unique-selector';

function findSelector(element) {
  if (element.hasAttribute('aria-label')) {
    return `[aria-label="${element.getAttribute('aria-label')}"]`;
  }
  if (element.hasAttribute('title')) {
    return `[title="${element.getAttribute('title')}"]`;
  }
  return unique(element);
}

export default findSelector