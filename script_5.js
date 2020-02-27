console.log("////// EXERCICE 5 : Bibliothécaire ///////" );


const books = [
{ title: 'Gatsby le magnifique', id: 133712, rented: 39 },
{ title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
{ title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
{ title: 'Les frères Karamazov', id: 450911, rented: 55 },
{ title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
{ title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
{ title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
{ title: 'Le meilleur des mondes', id: 88847, rented: 58 },
{ title: 'La disparition', id: 364445, rented: 33 },
{ title: 'La lune seule le sait', id: 63541, rented: 43 },
{ title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
{ title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Question 1 : 
console.log("Question 1 :Est-ce que tous les livres ont été au moins empruntés une fois ?" );

books.forEach(function (book){
  if(book.rented >= 1){
    console.log("Oui, tous les livres ont été empruntés plus d'une fois");
  } else {
    let result = `Non, le livre ${book.title} n'a pas été emprunté`;
    console.log(result)
  } 

});

// Question 2 : 
console.log("Question 2 : Quel est livre le plus emprunté ?" );

let most_rented = books.sort(function (a, b) {
  return b.id - a.id;
});

let most_rented_title = most_rented[0].title
let title_most = `Le livre le PLUS emprunté est :'${most_rented_title}'`;
console.log(title_most)

// Question 3 : 
console.log("Question 3 :Quel est le livre le moins emprunté ?" );

let less_rented = books.sort(function (a, b) {
  return a.id - b.id;
});

let less_rented_title = less_rented[0].title
let title_less = `Le livre le MOINS emprunté est :'${less_rented_title}'`;
console.log(title_less)



// Question 4 : 
console.log("Question 4 : Trouve le livre avec l'ID: 873495 " );
console.log(books.find(book => book.id == 873495));

// Question 5 : 
console.log("Question 5 : Supprime le livre avec l'ID: 133712" );
const books_without = books.filter(x => x.id !== 133712)
console.log(books_without)

// Question 6 : 

console.log("Question 6 : Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)" );

books_without.sort(function (a, b) {
return a.title.localeCompare(b.title);
});

console.log(books_without)

