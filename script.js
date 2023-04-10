let heldItem = null;
let editable = false;

handleDragStart = e => {
	e.target.style.opacity = 0.4;
	heldItem = e.target;
}
handleDragEnd = e => {
	e.target.style.opacity = 1;
}
handleDragOver = e => {
	e.preventDefault();
}
handleDragEnter = e => {
	e.preventDefault();
	e.target.style.borderColor = 'black';
}
handleDragLeave = e => {
	e.target.style.borderColor = 'transparent';
}
handleDrop = e => {
	e.preventDefault();
	[heldItem.innerHTML, e.target.innerHTML] = [e.target.innerHTML, heldItem.innerHTML];
	[heldItem.className, e.target.className] = [e.target.className, heldItem.className];
	e.target.style.borderColor = 'transparent';
}

edit = e => {
	let fullBoxes = document.getElementsByClassName('empty');
	editable = !editable;	
	for (el of fullBoxes) {
		el.contentEditable = editable;
		el.draggable = !editable;
		fullBoxes[0].focus();
	}
	document.getElementById('editbutton').innerHTML = editable ? "Done" : "Edit values";
}

let draggables = document.getElementsByClassName('drag');
for (el of draggables) {
	el.addEventListener('dragstart', handleDragStart);
	el.addEventListener('dragend', handleDragEnd);
	el.addEventListener('dragover', handleDragOver);
	el.addEventListener('dragenter', handleDragEnter);
	el.addEventListener('dragleave', handleDragLeave);
	el.addEventListener('drop', handleDrop);
}