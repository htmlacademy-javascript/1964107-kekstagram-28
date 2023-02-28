// проверяет длину строки
const checkStroke = (string, length) => string.length <= length;

checkStroke('строка', 7);

//проверяет палиндром ли это
const checkIsPalindrom = (string) => {
  const realString = string.toLowerCase();
  let reverseString = '';
  for (let i = realString.length - 1; i >= 0; i--) {
    reverseString += realString.at(i);
  }
  return realString === reverseString;
};

checkIsPalindrom('Довод');

//возвращает число из строки

const getNumber = (string) => {
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i),[10]))){
      result += string.at(i);
    }
  }
  return parseInt(result,10);
};

getNumber('год 2003');

//Возвращает исходную строку с добавленными символами

const addSymbolToStroke = (string,minLength,symbol) => {
  let arr = [];
  const itemsAdd = minLength - string.length;
  if (itemsAdd < 0) {
    return string;
  } else if (symbol.length > itemsAdd) {
    string = symbol.substr(0, itemsAdd) + string;
    return string;
  } else {
    for (let i = itemsAdd; i >= 0; i--) {
      string = arr.join('') + string;
      arr = [];
      for (let j = 0; j < symbol.length; j++) {
        if ((j + string.length) >= minLength) {
          break;
        }
        arr.push(symbol[j]);
      }
    }
    return string;
  }
};

addSymbolToStroke ('qwerty', 4, '0');


