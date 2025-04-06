//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };

//답 작성
const json = JSON.stringify(user);
const parsed = JSON.parse(json);

console.log(parsed);