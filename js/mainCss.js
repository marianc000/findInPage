import './table.js';

tableDiv.querySelectorAll('.zoomable').forEach(e => e.addEventListener("click", show));

function show(e) {
    modalContentDiv.innerHTML = e.target.innerHTML;
    modalDiv.style.display = 'flex';
    tableDiv.style.interactivity='inert';
}

modalDiv.addEventListener("click", hide);

function hide() {
    modalDiv.style.display = 'none';
    tableDiv.style.interactivity='';
}

modalContentDiv.addEventListener("click", e => e.stopPropagation());