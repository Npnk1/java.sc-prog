function mockString(str) {
  let result = ""; // сюда будем собирать новый текст

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLowerCase(); // чётный индекс → маленькая буква
    } else {
      result += str[i].toUpperCase(); // нечётный индекс → большая буква
    }
  }

  return result;
}

let mockingText = mockString("Ik vind programmeren leuk!");
console.log(mockingText);

let mockingText2 = mockString("Ik wil brownies eten");
console.log(mockingText2);
