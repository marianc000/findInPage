import './table.js';

tableDiv.querySelectorAll('.zoomable').forEach(e => e.addEventListener("click", show));

function show(e) {
    modalContentDiv.innerHTML = e.target.innerHTML;
    modalDiv.style.display = 'flex';
    tableDiv.querySelectorAll('.row>div').forEach(e => {
        e.dataset.txt = e.innerHTML;
        e.innerHTML = '';
    })
}

modalDiv.addEventListener("click", hide);

function hide() {
    modalDiv.style.display = 'none';
    tableDiv.querySelectorAll('[data-txt]').forEach(e => {
        e.innerHTML = e.dataset.txt;
        e.removeAttribute('data-txt');
    })
}

modalContentDiv.addEventListener("click", e => e.stopPropagation());