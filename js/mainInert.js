import './table.js';

tableDiv.querySelectorAll('.zoomable').forEach(e => e.addEventListener("click", show));

function show(e) {
    modalContentDiv.innerHTML = e.target.innerHTML;
    modalDiv.style.display = 'flex';
    tableDiv.inert = true;
}

modalDiv.addEventListener("click", hide);

function hide() {
    modalDiv.style.display = 'none';
    tableDiv.inert=false;
}

modalContentDiv.addEventListener("click", e => e.stopPropagation());