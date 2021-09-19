export default (targetNode, callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, {
    subtree: true,
    childList: true,
    characterData: true
  });
}