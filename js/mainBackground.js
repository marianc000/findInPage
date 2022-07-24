import './table.js';

tableDiv.querySelectorAll('.zoomable').forEach(e => e.addEventListener("click", show));

function show(e) {
    modalContentDiv.innerHTML = e.target.innerHTML;
    modalDiv.style.display = 'flex';
}

modalDiv.addEventListener("click", hide);

function hide() {
    modalDiv.style.display = 'none';
}

modalContentDiv.addEventListener("click", e => e.stopPropagation());