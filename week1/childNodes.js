// url for church website
const url = "https://www.churchofjesuschrist.org/?lang=eng";

// shows children of document.body
for (let i = 0; i < document.body.childNodes.length; i++) {
  return document.body.childNodes[i];
}

// shows all nodes from the collection
for (let node of document.body.childNodes) {
  return node;
}

// show only elements
for (let elem of document.body.children) {
  return elem;
}
