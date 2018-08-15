export {
  handleEvent,
  addLoadEvent,
  insertAfter,
  addClass,
  addId,
  styleElementNextSiblings,
  getHttpObject
};
// =============================================================================
function handleEvent(
  eventName,
  { onElement, withCallback, useCapture = false } = {},
  thisArg
) {
  const element = onElement || document.documentElement;

  function handler(event) {
    if (typeof withCallback === "function") {
      withCallback.call(thisArg, event);
    }
  }

  handler.destroy = function() {
    return element.removeEventListener(eventName, handler, useCapture);
  };

  element.addEventListener(eventName, handler, useCapture);
  return handler;
}

// 你需要的时候
// const handleClick = handleEvent("click", {
//   onElement: element,
//   withCallback: event => {
//     console.log("Tada!");
//   }
// });

// 你想删除它的时候
// handleClick.destroy();
// =============================================================================
function addLoadEvent(func) {
  var old_onload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      old_onload();
      func();
    };
  }
}
// =============================================================================
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
// =============================================================================
function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += " ";
    newClassName += value;
    element.className = newClassName;
  }
}

function addId(element, value) {
  if (!element.id) {
    element.id = value;
  } else {
    newId = element.id;
    newId += " ";
    newId += value;
    element.id = newId;
  }
}
// =============================================================================
function styleElementNextSiblings(tag, className) {
  if (!document.getElementsByTagName) return false;
  var elems = document.getElementsByTagName(tag);
  for (var i = 0; i < elems.length; i++) {
    var elem = getNextElement(elems[i].nextSibling);
    addClass(elem, className);
  }
  // var elem = document.getElementsByTagName(tag);
  // addClass(getNextElement(elem), className);
}

function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
// =============================================================================
function getHttpObject() {
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function() {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {}
      return false;
    };
  return new XMLHttpRequest();
}
// =============================================================================
