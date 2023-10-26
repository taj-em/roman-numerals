# _Roman Numeral Converter_

#### By _**Taj Empey**_

#### _Will take any number below 4,000 and convert it to a roman numeral_

## Technologies Used

- _JavaScript_
- _HTML_
- _Live Server_

## Description

_Takes a number input from the user and determines the roman numeral equivalent based on the place value of each digit, and then displays the roman numeral to the user._

## Setup/Installation Requirements

- _Clone repo from GitHub_
- _Open index.html in a broswer_

## Known Bugs

- _N/A_


## _Tests_

Describe: convertToNumeral();

Test: "It will take a number, convert to string, split it into an array and reverse the array"
Code: convertToNumeral(2346);
Expected Result: [6, 4, 3, 2]

Test: "It will convert a number in the ones position to a roman numeral"
Code: convertToNumeral(1);
Expected Result: ["I"]

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



## License

Copyright (c) _10/26_ _Taj Empey_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.