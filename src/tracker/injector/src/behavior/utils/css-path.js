export default function (element) {
  if (!(element instanceof Element)) return;
  var path = [];
  while (element.nodeType === Node.ELEMENT_NODE) {
      var selector = element.nodeName.toLowerCase();
      if (element.id) {
          selector += '#' + element.id;
      } else {
          var sib = element, nth = 1;
          while (sib.nodeType === Node.ELEMENT_NODE && (sib = sib.previousSibling) && nth++);
          selector += ":nth-child("+nth+")";
      }
      path.unshift(selector);
      element = element.parentNode;
  }
  return path.join(" > ");
}