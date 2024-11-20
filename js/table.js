import data from './data.json' with { type: "json" };

data.sort((a, b) => a.tag.localeCompare(b.tag));

tableDiv.innerHTML = table(data);
 
function table(data){
   return '<div class="table"><div class="row"><div class="tag">Tag</div><div class="section">Section</div><div class="description">Descrition</div></div>'+  
  data.map(o=>`<div class="row"><div>${o.tag}</div><div>${o.num}</div><div class='zoomable'>${o.content}</div></div>`).join('')+'</div>';
}