// 2번 문제

let user = {
    name: "민서",
    years: 21,
};

const {name : Name, years : age, isAdmin : isAdmin = false} = user;
// name -> Name으로, years -> age로, isAdmin은 user 배열에 들어있지 않으므로 isAdmin으로 이름 지어줌. 
// 문제에서 isAdmin이라는 프로퍼티가 없으면 false를 할당하라고 하였으므로 false 할당

alert(Name); // "민서"
alert(age); // 21
alert(isAdmin); // false

// console.log(Name);
// console.log(age);
// console.log(isAdmin);