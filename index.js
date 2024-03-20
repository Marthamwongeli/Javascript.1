// Extract the last four characters from the string below;"extravaganza"
let a="extravaganza";
console.log(a.slice(8,));

// // Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food="The quick fox jumped over the lazy dog";
let newFood='eat';
let position= 4;
let newString= food.slice(0,4) + 'eat' + food.slice(4);
console.log(newString);

// // Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story="The quick brown fox jumps over the lazy dog";
const count = (story.match(/the/g) || []).length;
console.log(count)
const count2 = (story.match(/brown/g) || []).length;
console.log(count2);
    

// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1="The pupils are reading in the library";
let p ="are";
console.log(string1.includes(p));

const string2="The child was sitting on the table before it fell";
let r ='sitting';
console.log(string2.includes(r));



// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let y="wonderful";
console.log(y.toUpperCase());

let k="AMAZING";
console.log(k.toLowerCase());

let x="undERneath";
console.log(x.toLowerCase());

function titleCase(str) {
	return str.toLowerCase().split(' ').map(function (word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
}
console.log(titleCase("A wonderful world"));













