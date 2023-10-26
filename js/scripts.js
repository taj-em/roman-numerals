
function assignOnes(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (index == number) {
      number = array[index];
      return number;
    }
  };
}
function assignTens(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (index == number) {
      number = array[index];
      return number;
    }
  };
}
function assignHundreds(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (index == number) {
      number = array[index];
      return number;
    }
  };
}
function assignThousands(array, number) {
  for (let index = 0; index < array.length; index += 1) {
    if (index == number) {
      number = array[index];
      return number;
    }
  };
}


function convertToNumeral(num) {
  const onesArray = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const tensArray = ["", "X", "XX", "XXX", "IV", "L", "LX", "LXX", "LXXX", "XC"]
  const hundredsArray = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const thousandsArray = ["", "M", "MM", "MMM"]
  const errorMSG = "Please Enter A Valid Number";
  if (num === undefined) {
    return errorMSG;
  }
  const numArray = num.toString().split("")
  const flipArray = numArray.slice().reverse();
  let finalArray = [];
  let ones = assignOnes(onesArray, flipArray[0]);
  let tens = assignTens(tensArray, flipArray[1]);
  let hundreds = assignHundreds(hundredsArray, flipArray[2]);
  let thousands = assignThousands(thousandsArray, flipArray[3]);
  console.log("Flip Array: " + flipArray);
  if (flipArray[3] >= 4 || flipArray[0] !== Number) {
    return errorMSG;
  }
  finalArray.unshift(ones);
  finalArray.unshift(tens);
  finalArray.unshift(hundreds);
  finalArray.unshift(thousands);
  return finalArray;
};