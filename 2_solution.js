// 2번 문제

let user = {
    name: "민서",
    years: 21,
};

// 여기에 코드를 작성해주세요
const { name:Name, years:age, isAdmin = false } = user;

console.log(Name); // "민서"
console.log(age); // 21
console.log(isAdmin); // false