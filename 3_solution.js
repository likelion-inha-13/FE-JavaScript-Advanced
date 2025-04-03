//3번 문제

let user = {
    name: "다솜",
    part: "FE",
  };

  const json = JSON.stringify(user); //객체를 JSON 문자열로 변환
  console.log(json)

  const parsed = JSON.parse(json); //JSON 형태를 다시 객체로 변경
  console.log(parsed);