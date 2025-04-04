//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };

//답 작성
let userjson = JSON.stringify(user);
let userobj = JSON.parse(userjson);

console.log(userjson)
console.log(userobj)