console.log("////// EXERCICE 2 : Opérations & boucles ///////" );

let number = prompt("De quel nombre veux-tu calculer la factorielle ?" );
console.log("De quel nombre veux-tu calculer la factorielle ?" );
function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f *= i;
  }  
  return f;
}

let result = `Le résultat est de ${fact(number)}`;
console.log(result);