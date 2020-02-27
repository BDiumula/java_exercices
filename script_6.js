console.log("////// EXERCICE 6 : Code la vie ///////" );


// Premier ARN
const arn_1 = "CCGUCGUUGCGCUACAGC";
split = arn_1.match(/.{1,3}/g)
console.log(split)
//serine
serine1 = split.indexOf("UCU") 
if (~serine1) {
   split[serine1] = "Sérine";
}
serine2 = split.indexOf("UCA") 
if (~serine2) {
   split[serine2] = "Sérine";
}

serine3 = split.indexOf("UCG") 
if (~serine3) {
   split[serine3] = "Sérine";
}

serine4 = split.indexOf("AGU") 
if (~serine4) {
   split[serine4] = "Sérine";
}

serine5 = split.indexOf("AGC") 
if (~serine5) {
   split[serine5] = "Sérine";
}
serine6 = split.indexOf("UCC") 
if (~serine5) {
   split[serine5] = "Sérine";
}
//proline

proline1 = split.indexOf("CCU") 
if (~proline1) {
   split[proline1] = "Proline";
}

proline2 = split.indexOf("CCC") 
if (~proline2) {
   split[proline2] = "Proline";
}

proline3 = split.indexOf("CCA") 
if (~proline3) {
   split[proline3] = "Proline";
}

proline4 = split.indexOf("CCG") 
if (~proline4) {
   split[proline4] = "Proline";
}

//Leucine 
Leucine1 = split.indexOf("UUA") 
if (~Leucine1) {
   split[Leucine1] = "Leucine";
}

Leucine2 = split.indexOf("UUG") 
if (~Leucine2) {
   split[Leucine2] = "Leucine";
}
//Phénylalanine 
Phénylalanine1 = split.indexOf("UUU") 
if (~Phénylalanine1) {
   split[Phénylalanine1] = "Phénylalanine";
}

Phénylalanine2 = split.indexOf("UUC") 
if (~Phénylalanine2) {
   split[Phénylalanine2] = "Phénylalanine";
}

//Tyrosine 

Tyrosine1 = split.indexOf("UAU") 
if (~Tyrosine1) {
   split[Tyrosine1] = "Tyrosine";
}

Tyrosine2 = split.indexOf("UAC") 
if (~Tyrosine2) {
   split[Tyrosine2] = "Tyrosine";
}

//Arginine 
Arginine1 = split.indexOf("CGU") 
if (~Arginine1) {
   split[Arginine1] = "Arginine";
}

Arginine2 = split.indexOf("CGC") 
if (~Arginine2) {
   split[Arginine2] = "Arginine";
}

Arginine3 = split.indexOf("CGA") 
if (~Arginine3) {
   split[Arginine3] = "Arginine";
}

Arginine4 = split.indexOf("CGG") 
if (~Arginine4) {
   split[Arginine4] = "Arginine";
}

Arginine5 = split.indexOf("AGA") 
if (~Arginine5) {
   split[Arginine5] = "Arginine";
}

Arginine6 = split.indexOf("AGG") 
if (~Arginine6) {
   split[Arginine6] = "Arginine";
}

joined = split.join("-");
console.log(joined)

// Deuxième ARN

const arn_2 = "CCUCGCCGGUACUUCUCG";
split_2 = arn_2.match(/.{1,3}/g)
console.log(split_2)

//serine
serine1 = split_2.indexOf("UCU") 
if (~serine1) {
   split_2[serine1] = "Sérine";
}
serine2 = split_2.indexOf("UCA") 
if (~serine2) {
   split_2[serine2] = "Sérine";
}

serine3 = split_2.indexOf("UCG") 
if (~serine3) {
   split_2[serine3] = "Sérine";
}

serine4 = split_2.indexOf("AGU") 
if (~serine4) {
   split_2[serine4] = "Sérine";
}

serine5 = split_2.indexOf("AGC") 
if (~serine5) {
   split_2[serine5] = "Sérine";
}
serine6 = split_2.indexOf("UCC") 
if (~serine5) {
   split_2[serine5] = "Sérine";
}
//proline

proline1 = split_2.indexOf("CCU") 
if (~proline1) {
   split_2[proline1] = "Proline";
}

proline2 = split_2.indexOf("CCC") 
if (~proline2) {
   split_2[proline2] = "Proline";
}

proline3 = split_2.indexOf("CCA") 
if (~proline3) {
   split_2[proline3] = "Proline";
}

proline4 = split_2.indexOf("CCG") 
if (~proline4) {
   split_2[proline4] = "Proline";
}

//Leucine 
Leucine1 = split_2.indexOf("UUA") 
if (~Leucine1) {
   split_2[Leucine1] = "Leucine";
}

Leucine2 = split_2.indexOf("UUG") 
if (~Leucine2) {
   split_2[Leucine2] = "Leucine";
}
//Phénylalanine 
Phénylalanine1 = split_2.indexOf("UUU") 
if (~Phénylalanine1) {
   split_2[Phénylalanine1] = "Phénylalanine";
}

Phénylalanine2 = split_2.indexOf("UUC") 
if (~Phénylalanine2) {
   split_2[Phénylalanine2] = "Phénylalanine";
}

//Tyrosine 

Tyrosine1 = split_2.indexOf("UAU") 
if (~Tyrosine1) {
   split_2[Tyrosine1] = "Tyrosine";
}

Tyrosine2 = split_2.indexOf("UAC") 
if (~Tyrosine2) {
   split_2[Tyrosine2] = "Tyrosine";
}

//Arginine 
Arginine1 = split_2.indexOf("CGU") 
if (~Arginine1) {
   split_2[Arginine1] = "Arginine";
}

Arginine2 = split_2.indexOf("CGC") 
if (~Arginine2) {
   split_2[Arginine2] = "Arginine";
}

Arginine3 = split_2.indexOf("CGA") 
if (~Arginine3) {
   split_2[Arginine3] = "Arginine";
}

Arginine4 = split_2.indexOf("CGG") 
if (~Arginine4) {
   split_2[Arginine4] = "Arginine";
}

Arginine5 = split_2.indexOf("AGA") 
if (~Arginine5) {
   split_2[Arginine5] = "Arginine";
}

Arginine6 = split_2.indexOf("AGG") 
if (~Arginine6) {
   split_2[Arginine6] = "Arginine";
}


joined_2 = split_2.join("-");
console.log(joined_2)


