// 2번 문제

let user = {
    name: "민서",
    years: 21,
};

//구조 분해 할당을 이용하여 각각의 프로퍼티 값을 변수에 할당함
const {name:Name , years:age, isAdmin: isAdmin = false} = user;

alert(Name); // "민서"
alert(age); // 21
alert(isAdmin); // false