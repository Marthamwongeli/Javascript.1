// Extract the last four characters from the string below;"extravaganza"
let a="extravaganza";
console.log(a[8],a[9],a[10],a[11]);

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food="The quick fox jumped over the lazy dog";
let changed= food.slice(0,4) + " eat " + food.slice(4);
console.log({changed});

// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story="The quick brown fox jumps over the lazy dog";
const count1=(count.match(/the/gi)||[].length);
const count2=(count.match(/brown/gi)|| [].length);

console.log("Number of occurrences of'the':",count1);
console.log("Number of occurrences of'brown':",count2);

// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1="The pupils are reading in the library";
console.log({item:string1.indexOf('are')});

const string2="The child was sitting on the table before it fell";
console.log({item:string2.indexOf('sitting')});



// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let y="wonderful";
console.log(y.toUpperCase());

let k="AMAZING";
console.log(k.toLowerCase());

let x="undERneath";
console.log(x.toLowerCase());

let z="A wonderful world";
console.log(z.toTitlecase());








