// 2번 문제

let user = {
    name: "민서",
    years: 21,
};

// 여기에 코드를 작성해주세요
const {name: Name, years: age, isAdmin} = user; // 객체 구조분해 할당 이용

alert(Name); // "민서"
alert(age); // 21
alert(isAdmin); // false