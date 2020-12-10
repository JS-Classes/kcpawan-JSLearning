const a = 34535;

// declaring Binary number

const b = 0b10101010001;

// declaring Octal number
const c = 0o34561;

// declaring Hex number
const d = 0x12AF;

// Number API 

let age = "67";

let ageNumber = Number.parseInt (age);
let ageNumber2 = Number.parseFloat (age);

//console.log(typeof NaN);

Number.isNaN();
Number.isInteger();
Number.isFinite();


// Math API
Math.abs(-89);
Math.pow();
Math.random();

let r = Math.random();
console.log(r);

function getrandom(m, n){
    let x = Math.random();

    let randomnumber = m + x *(n-m);
    return randomnumber;

}

console.log(getrandom(34,56));

let getrandom2 = (m,n) => m + Math.random()



