function assignNumeral(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (number === undefined) {
      return "";
    } else if (index == number) {
      let numeral = array[index];
      return numeral;
    }
  };
}


function convertToNumeral(num) {
  const onesArray = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const tensArray = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const hundredsArray = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const thousandsArray = ["", "M", "MM", "MMM"]
  const errorMSG = "Please Enter A Valid Number";
  const numArray = num.toString().split("")
  const flipArray = numArray.slice().reverse();
  let finalArray = [];
  let ones = assignNumeral(onesArray, flipArray[0]);
  let tens = assignNumeral(tensArray, flipArray[1]);
  let hundreds = assignNumeral(hundredsArray, flipArray[2]);
  let thousands = assignNumeral(thousandsArray, flipArray[3]);
  console.log("Flip Array: " + flipArray);
  if (flipArray[3] >= 4) {
    return errorMSG;
  }
  finalArray.unshift(ones);
  finalArray.unshift(tens);
  finalArray.unshift(hundreds);
  finalArray.unshift(thousands);
  if (num < 0) {
    return "-" + finalArray.join("")
  }
  return finalArray.join("");
};

function display(event) {
event.preventDefault();
const userInput = document.getElementById("text-box").value;
const displayOutput = document.getElementById("display-numeral");
const displayNumeral = convertToNumeral(userInput)
displayOutput.innerText = "";
displayOutput.append(displayNumeral);
};


window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", display)
});