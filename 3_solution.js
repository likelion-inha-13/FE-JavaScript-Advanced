//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };
  
const json = JSON.stringify(user);
const parsed = JSON.parse(json);

console.log(typeof json);
console.log(json);

console.log(typeof parsed);
console.log(parsed);

//답 작성