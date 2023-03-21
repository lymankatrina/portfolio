// shows children of document.body
for (let i = 0; i < document.body.childNodes.length; i++) {
	alert(document.body.childNodes[i]);
}

// shows all nodes from the collection
for (let node of document.body.childNodes) {
	alert(node);
}

// show only elements
for (let elem of document.body.children) {
	alert(elem);
}
