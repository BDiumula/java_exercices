console.log("////// EXERCICE 6 : Code la vie ///////" );


// premier ARN
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

//leucine 
leucine1 = split.indexOf("UUA") 
if (~leucine1) {
   split[leucine1] = "Leucine";
}

leucine2 = split.indexOf("UUG") 
if (~leucine2) {
   split[leucine2] = "Leucine";
}
//phénylalanine 
phénylalanine1 = split.indexOf("UUU") 
if (~phénylalanine1) {
   split[phénylalanine1] = "Phénylalanine";
}

phénylalanine2 = split.indexOf("UUC") 
if (~phénylalanine2) {
   split[phénylalanine2] = "Phénylalanine";
}

//tyrosine 

tyrosine1 = split.indexOf("UAU") 
if (~tyrosine1) {
   split[tyrosine1] = "Tyrosine";
}

tyrosine2 = split.indexOf("UAC") 
if (~tyrosine2) {
   split[tyrosine2] = "Tyrosine";
}

//Arginine 
arginine1 = split.indexOf("CGU") 
if (~arginine1) {
   split[arginine1] = "Arginine";
}

arginine2 = split.indexOf("CGC") 
if (~arginine2) {
   split[arginine2] = "Arginine";
}

arginine3 = split.indexOf("CGA") 
if (~arginine3) {
   split[arginine3] = "Arginine";
}

arginine4 = split.indexOf("CGG") 
if (~arginine4) {
   split[arginine4] = "Arginine";
}

arginine5 = split.indexOf("AGA") 
if (~arginine5) {
   split[arginine5] = "Arginine";
}

arginine6 = split.indexOf("AGG") 
if (~arginine6) {
   split[arginine6] = "Arginine";
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

//leucine 
leucine1 = split_2.indexOf("UUA") 
if (~leucine1) {
   split_2[leucine1] = "Leucine";
}

leucine2 = split_2.indexOf("UUG") 
if (~leucine2) {
   split_2[leucine2] = "Leucine";
}
//phénylalanine 
phénylalanine1 = split_2.indexOf("UUU") 
if (~phénylalanine1) {
   split_2[phénylalanine1] = "Phénylalanine";
}

phénylalanine2 = split_2.indexOf("UUC") 
if (~phénylalanine2) {
   split_2[phénylalanine2] = "Phénylalanine";
}

//tyrosine 

tyrosine1 = split_2.indexOf("UAU") 
if (~tyrosine1) {
   split_2[tyrosine1] = "Tyrosine";
}

tyrosine2 = split_2.indexOf("UAC") 
if (~tyrosine2) {
   split_2[tyrosine2] = "Tyrosine";
}

//Arginine 
arginine1 = split_2.indexOf("CGU") 
if (~arginine1) {
   split_2[arginine1] = "Arginine";
}

arginine2 = split_2.indexOf("CGC") 
if (~arginine2) {
   split_2[arginine2] = "Arginine";
}

arginine3 = split_2.indexOf("CGA") 
if (~arginine3) {
   split_2[arginine3] = "Arginine";
}

arginine4 = split_2.indexOf("CGG") 
if (~arginine4) {
   split_2[arginine4] = "Arginine";
}

arginine5 = split_2.indexOf("AGA") 
if (~arginine5) {
   split_2[arginine5] = "Arginine";
}

arginine6 = split_2.indexOf("AGG") 
if (~arginine6) {
   split_2[arginine6] = "Arginine";
}


joined_2 = split_2.join("-");
console.log(joined_2)


