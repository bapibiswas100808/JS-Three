// // 1. Comparison operator***

// // ==
// console.log(9 == 9);
// // ===
// console.log(9 === "9");
// // !=
// console.log(9 != 8);
// // !==
// console.log(9 !== "9");
// // >
// console.log(9 > 8);
// // <
// console.log(8 < 7);
// // > or =
// console.log(9 >= 8);
// // < or =
// console.log(9 <= 6);

// ? Ternary Operator

// 2. Logical Operators***

// // && logical and
// let x = 9;
// let y = 6;
// console.log(x < 10);
// console.log(y > 3);
// console.log(x < 10 && y > 7);

// // || logical Or
// let w = 9;
// let v = 6;
// console.log(w < 10);
// console.log(v > 3);
// console.log(w < 8 || v > 5);

// // ! logical not
// console.log(x == y);
// console.log(!(x == y));

// // 3. operator precedence
// // B       O      D           M           A        S
// //Bracket order Divison Multipication Addition Substraction
// console.log(36 / 6 + (10 - 5) * 2 ** 3);
// // 36/6+5*2**3
// // 36/6+5*8
// // 6+5*8
// // 6+40
// // 46

// // 4. `` template literals***

// const firstName = "Bapi";
// const lastName = "Biswas";
// const country = "Bangladesh";
// let age = 31;
// let job = "learning Web Development";
// console.log(firstName + " " + lastName);
// // I'm Bapi Biswas. 31 years old learning Web development!
// // console.log(" I'm Bapi Biswas. 31 years old learning Web development!");
// console.log(
//   "I'm" +
//     " " +
//     firstName +
//     " " +
//     lastName +
//     "." +
//     " " +
//     age +
//     " " +
//     "years old" +
//     " " +
//     job +
//     "!"
// );
// console.log(`I'm ${firstName} ${lastName}. ${age} years old ${job}!`);
// console.log(`I Love ${country}`);

// console.log(`first line`);
// console.log(`second line`);
// console.log(`third line`);
// console.log(`Bangladesh win ${2 + 1} series`);

// 5. If Else Statement***

if (5 > 7) {
  console.log("yes");
} else {
  console.log("no");
}
if (10 < 9) {
  console.log("calculation is right");
} else {
  console.log("calculation is wrong");
}

let age = 6;
if (age >= 6) {
  console.log("Able to start school");
} else {
  console.log("Not able to go to school");
}
