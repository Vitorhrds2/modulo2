const node = document.getElementById("ponto").lastChild;
const clone = node.cloneNode(true);
document.getElementById("ponto2").appendChild(clone);