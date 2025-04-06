//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };

//답 작성
const json = JSON.stringify(user); // 직렬화
const parsed = JSON.parse(json); // 역직렬화

console.log(typeof json);
console.log(json);
console.log(typeof parsed);
console.log(parsed);