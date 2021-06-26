export default function generatePassword(pasLength) {
  const vowel = ["e", "u", "i", "o", "a", "y"];
  const consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z",
  ];
  const symbol = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = [];

  while (result.length < pasLength - 2) {
    result.push(consonant[Math.floor(Math.random() * consonant.length)]);
    if (result.length < pasLength - 2) {
      result.push(vowel[Math.floor(Math.random() * vowel.length)]);
    }
  }

  const capitaSymIndex = Math.floor(Math.random() * result.length);
  const resultCap = result;
  resultCap[capitaSymIndex] = result[capitaSymIndex].toUpperCase();

  const numIndex = Math.floor(Math.random() * resultCap.length);
  const resultCapNum = resultCap;
  resultCapNum.splice(numIndex, 0, nums[Math.floor(Math.random() * nums.length)]);

  const symIndex = Math.floor(Math.random() * resultCapNum.length);
  const resultCapNumSym = resultCapNum;
  resultCapNumSym.splice(symIndex, 0, symbol[Math.floor(Math.random() * symbol.length)]);

  return resultCapNumSym;
}
