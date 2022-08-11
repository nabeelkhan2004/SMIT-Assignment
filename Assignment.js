// Requirement 01
// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function funcRev() {
	let i = document.getElementById("RevLoopInput");
	i = Number (i.value);
	let revNum = [];
	// console.log(i)
	while(i >= 1 ) {
		revNum.push(i + " ");
		--i;
	};
	document.getElementById("revLoopOutput").innerHTML = `<b>${revNum}</b> `;
};

// Requirement 02
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

function pDromeCheck() {
	let pDromeWord = document.getElementById("pDrome").value;

	let pDromeRemSpace = pDromeWord.replace(/ /g, "");
	// console.log(pDromeRemSpace);

	let wordLenDec = ((pDromeRemSpace.length) - 1);

	let wordDiv = Math.floor((pDromeRemSpace.length) / 2);

	let pDromeWordA, pDromeWordB;
	for (let i = 0; i < wordDiv; i++) {
		pDromeWordA = pDromeRemSpace[i];
		// console.log(pDromeWordA)
		pDromeWordB = pDromeRemSpace[wordLenDec--];
		// console.log(pDromeWordB)

	}
		if (pDromeWordA === pDromeWordB) {
			document.getElementById("pDromeOutput").innerHTML = `<b>"${pDromeWord}"</b> is "Palindrome" word`;
		}
		else {document.getElementById("pDromeOutput").innerHTML = `<b>"${pDromeWord}"</b> is not "Palindrome" word`;
		};
};

// Requirement 03
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function myName() {
	
	let myName = document.getElementById("allComb").value;
	
	for (let i = 0; i <= myName.length; i++) {
		let myNameSlice = myName.slice(0, i);
		// document.getElementById("allCombOutput").innerHTML = myNameSlice  + "<br>";
		console.log(myNameSlice);
		}
	for (let i = 1; i < myName.length; i++) {
		let myNameSlice = myName.slice(i, myName.length);
		console.log(myNameSlice);
		document.getElementById("allCombOutput").innerHTML = `Please find the output in <b>"Console"</b> by pressing <b>"F12"</b> on your keyboard`;
		}
};

// Requirement 04
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortName() {
	let sortName = document.getElementById("sortValue").value;

	let sortNameLowerCase = sortName.toLowerCase(); //to Lower Case all characters
	let sortNameSplit = sortNameLowerCase.split(""); // Split and convert object in to Array
	let alphabetArr = ['a', 'b', "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let sortNameNew = []; //declared an Array
	
	for (let i = 0; i < sortName.length; i++) {
		if (alphabetArr.includes(sortNameLowerCase[i])) {
			// console.log(i);
			sortNameNew.push(sortNameSplit.slice(i, i +1));
		}
	};
	sortNameFinal = sortNameNew.sort().join("");
	document.getElementById("sortValueOutput").innerHTML = sortNameFinal;
};

// Requirement 05
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function toFirstCase() {
	let letterCap = document.getElementById("firstWordCap").value;
	let lCapLowSplit = ((letterCap).toLowerCase()).split("");
	lCapLowSplit.unshift(" ");
	let firstCharCap = [];
	let firstCharCapNew = [];
	for (let i = 0; i < lCapLowSplit.length; i++) {
		if (lCapLowSplit[i] === " ") {
			firstCharCap = (lCapLowSplit.slice(i, i + 2)).join("").toUpperCase();
			// document.write(firstCharCap);
			lCapLowSplit.splice(i + 1, 1, firstCharCap[1]);
		}
	};
	document.getElementById("firstWordOutput").innerHTML = lCapLowSplit.join("");
};

// Requirement 06
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function bigValue() {
	let bigValue = document.getElementById("longWord").value;
	let spaceBar = [];
	let valueArr = [];
	bigValue = " " + bigValue;
	// document.write(bigValue);
		for (let i = 0; i < bigValue.length; i++) {
			if (bigValue[i] === " ") {
				spaceBar.push(i);
			};
		};

		for (let j = 0; j < spaceBar.length; j++) {
			valueArr.push(bigValue.slice(spaceBar[j], spaceBar[j + 1]));
		};
		
		let valueArrLen = (valueArr.sort((a, b) => b.length - a.length));
		document.getElementById("findOutput").innerHTML = `"<b>${valueArrLen[0]}</b>" is the longest word in para`;
	};

// Requirement 07
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowelCount() {
	let vowelCount = document.getElementById("countVowles").value
	vowelArr = ["a", "e", "i", "o", "u"];
	vowelCount = vowelCount.split("");
	let vowels = [];
	let vowelLen = [];
	
	for (let i = 0; i < vowelCount.length; i++) {
		if (vowelArr.includes(vowelCount[i])) {
		vowels.push(` ${vowelCount[i]}`);
		vowelLen++;
		};
	};

	console.log(`Total numbers of "Vowels" are: ${vowelLen}`); + "<br>";
	document.getElementById("vowlesOutput").innerHTML = `Total numbers of "Vowels" are: ${vowelLen} <br> <b>${vowels.join()} </b>`;
};

// Requirement 08
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeNum() {
	let numBer = document.getElementById("prime").value;
	let flagVal = true;
	if (numBer === 1) {
		document.write(`${numBer} is not a prime number`);
	}
	else if (numBer > 1) {
		for (let i = 2; i < numBer; i++) {
			if (numBer % i === 0) {
				flagVal = false;
				break;
			}
		}
		
		if (flagVal){
		document.getElementById("primeOut").innerHTML = `<b>${numBer}</b> is a prime number `;
		}
		
		else {
			document.getElementById("primeOut").innerHTML = `<b>${numBer}</b> is not a prime number`;
		};
	};
};

// Requirement 09
// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function argType() {
	let argValue = document.getElementById("checkVal").value;
	let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	let symArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*"];
	let alphabetArr = ['a', 'b', "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let stringRep = [`"`, "'", '`'];
	// argValue = argValue.split("");
	console.log(stringRep);
	for (let i = 0; i < argValue.length; i++) {
		if ((argValue.split(""))[argValue.length - 1] == ")" &&  argValue[argValue.length - 2] == "(") {
			document.getElementById("checkType").innerHTML = `The type of your input <b>${argValue}</b> is <b>function</b>`;
			break;
		}
		else if (argValue == "true" || argValue == "false") {
			document.getElementById("checkType").innerHTML = `The type of your input <b>${argValue}"</b> is <b>Bolean</b>`;
			break;
		}
		else if ((argValue[0] === argValue[i]) && (argValue[(argValue.length) - 1] === argValue[i])) {
			document.getElementById("checkType").innerHTML = `The type of your input <b>${argValue}</b> is <b>String</b>`;
			break;
		}
		else if (argValue[i].includes(symArr)) {
			document.getElementById("checkType").innerHTML = `The type of your input <b>${argValue}</b> is <b>null</b>`;
			break;
		}
		else if (argValue.includes(numArr[i])) {
			document.getElementById("checkType").innerHTML = `The type of your input <b>${argValue}</b> is <b>number</b>`;
			break;
		}
		else {
			document.getElementById("checkType").innerHTML = `The Variable type <b>${argValue}</b> is <b>undefined</b>`;
			break;
		}
	}
	// console.log(`The type of user input "${argValue}" is "${(typeof argValue)}"`);
};

// Requirement 10
// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function identifyValue(identifyVal) {
	
	identifyVal = (identifyVal.replace(/ /g, ""))/*.split("")*/;
	
	identifyVal = "," + identifyVal;
	console.log(identifyVal);

	let identifySep = [];
	let identifyArr = []

	for (let i = 0; i < identifyVal.length; i++) {
		if (identifyVal[i].includes(",")) {
			identifySep.push(i);			
		};
	};
	console.log(identifySep);
	
	for (let i = 0; i < identifySep.length; i++) {
		identifyArr.push(Number (identifyVal.slice((identifySep[i] + 1), identifySep[i + 1],)))
	};
identifyArr.sort(function(a, b){return a-b}); //sort values
console.log(identifyArr)
document.getElementById("identifyOut").innerHTML = `Second Lowest value is: <b>${identifyArr[1]}</b> <br> Second Greatest value is <b>${identifyArr[identifyArr.length - 2]}</b>`;
};