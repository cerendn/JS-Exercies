//String " "
const myString = "Hello World";
console.log(typeof(myString));

//Number
const PI = 3.14 ;
console.log(typeof(PI));

//Boolean
const sunny = true ;
console.log(typeof(sunny));

//Undefined
let color;
console.log(typeof(color));

const sentence = "O ilk kayıtsızlığım belki de sezgisel bir savunma biçimiydi; ciddi tavrımı takınma, aradaki mesafeyi koruma da olabilirdi ama işe yaradı.İnsanın kendine,kendi dışında bir özün gözle­riyle bakabilmesi her zaman işe yarar. Bu bir alıştırmadır ve öğ­renilebilir."
console.log(sentence.length);
console.log(sentence.toLowerCase());//tüm harfleri küçük harf 
console.log(sentence.includes('mesafe'));//içinde kelime arama
console.log(sentence.split());//string to array
console.log(sentence.split(' '));//bosluklardan array'e bölme
console.log(sentence.replace('takınma','takılma'));//değiştirme
console.log(sentence.charAt(40));//indexdeki karakter
console.log(sentence.lastIndexOf('a'));// gectiği son index
console.log(sentence.indexOf('l'));//gectiği ilk index
console.log(sentence.trim());//bastaki ve sondaki boslukları kesme

const studentName = "Lily Harper";
const course = "Pilates Eğitmenliği";
const startday ="20-02-2024";
console.log(
    `Değerli kursiyerimiz ${studentName}, ${course} eğitiminiz ${startday} tarihinde başlayacaktır.`
);




