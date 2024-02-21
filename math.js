//0 - 200 arası rastgele bir sayı oluşturma
console.log(Math.floor(Math.random() * 201));

console.log(Math.trunc(Math.random() * 50));

let numbers = [(30, 7, 89, 97, 12.3, -20, -3, 390, 800, 1234)];
console.log(Math.max(numbers));

let num = 7.8;
if (num !== 7) {
    num = Math.trunc(num);
}
console.log(num);

//stringdeki harflere rastgele ulaşmak
let mat = "Matematik";
let rastIndex = Math.floor(Math.random() * mat.length);
console.log(mat[rastIndex]); 

