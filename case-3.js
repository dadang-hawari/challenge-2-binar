const getAngkaTerbesarKedua = (value) => {
  if(value) {
    if (Array.isArray(value)) {
      if(value.length === 1) return `Minimum arr length is 2, yours only 1: ${value[0]}`;
      let firstBiggestNum = 0,
        secondBiggestNum = 0;
      value.forEach((element) => {
        if (element > firstBiggestNum) {
          secondBiggestNum = firstBiggestNum;
          firstBiggestNum = element;
        } else if (element > secondBiggestNum && element < firstBiggestNum) {
          secondBiggestNum = element;
        }
      });
      return secondBiggestNum;
    } 
    // return Error("Invalid data type");
    return "Error: Invalid data type";
  }
  // return Error("Where is the parameter");
  return "Error: Where is the parameter";
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8, 4, 430, 3, 12];

console.log(getAngkaTerbesarKedua(dataAngka)); // => Output: 12
console.log(getAngkaTerbesarKedua(12)); // => Output -> Error: Invalid data type
console.log(getAngkaTerbesarKedua()); // => Output -> Error: Where is the Parameter

// Cara lain
const getAngkaTerbesarKeduaShort = (value) => {
  if(value) {
    if (Array.isArray(value)) {
      if(value.length === 1) return `Minimum arr length is 2, yours only 1: ${value[0]}`;
      dataAngka.sort((a, b) => a - b);
      return dataAngka[dataAngka.length - 2 ];
    }
      // return Error("Invalid data type");
      return "Error: Invalid data type";
    }
    // return Error("Where is the parameter");
    return "Error: Where is the parameter";
}

console.log(getAngkaTerbesarKeduaShort(dataAngka));
console.log(getAngkaTerbesarKeduaShort(12));
console.log(getAngkaTerbesarKeduaShort());
