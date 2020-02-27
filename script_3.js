console.log("////// EXERCICE 3 : Pyramide de Mario ///////" );

let count = prompt("Salut, bienvenue dans ma super pyramide! Combien d'étages veut-tu?" );
let diese = "#"
let space = " "
for (let i=1; i<=count; i++) 
{
	console.log( space.repeat(count-i) + diese.repeat(i))
}
