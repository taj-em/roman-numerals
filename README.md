Describe: convertToNumeral();

Test: "It will take a number, convert to string, split it into an array and reverse the array"
Code: convertToNumeral(2346);
Expected Result: [6, 4, 3, 2]

Test: "It will convert a number in the ones position to a roman numeral"
Code: convertToNumeral(6);
Expected Result: ["VI"]

Test: "It will convert a number in the tens position to a roman numeral"
Code: convertToNumeral(10);
Expected Result: ["X"]

Test: "It will convert a number in the hundreds position to a roman numeral"
Code: convertToNumeral(100);
Expected Result: ["C"]

Test: "It will convert a number in the thousands position to a roman numeral"
Code: convertToNumeral(1000);
Expected Result: ["M"]

Test: "It will throw an error for numbers larger than 3,999"
Code: convertToNumeral(4321);
Expected Result: "Please Enter A Valid Number"

