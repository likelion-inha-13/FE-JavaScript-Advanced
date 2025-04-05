// 2번 문제

let user = {
    name: "민서",
    years: 21,
};

const {name : Name, years : age, isAdmin : isAdmin = false} = user;

alert(Name); // "민서"
alert(age); // 21
alert(isAdmin); // false

// console.log(Name);
// console.log(age);
// console.log(isAdmin);