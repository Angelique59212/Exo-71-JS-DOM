let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";

document.getElementById('viewport').appendChild(monDiv);

let secondDiv = document.createElement("div");
document.getElementById("viewport").prepend(secondDiv);

secondDiv.style.background = "red";
secondDiv.style.width = "100px";
secondDiv.style.height = "100px";

let span = document.getElementById("aSupprimer");
span.remove();


