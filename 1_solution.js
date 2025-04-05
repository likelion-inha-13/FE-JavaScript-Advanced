// 1번 문제

let name = "신석";

// ? 부분에 예측 값을 작성해주세요(코드 실행 금지)

alert(`hello ${1}`); // hello 1 -> ${}' 중괄호 안에 1이 들어있으므로 1이 출력됨
alert(`hello ${"name"}`); // hello name -> ${}' 가 제대로 들어있지만, 중괄호 안에 있는 name이 "신석"을 가리키는 것이 아니라 "name"이라는 문자를 가리키므로 name이 출력됨 
alert("hello ${name}"); // hello ${name} -> 전체가 큰따옴표 안에 들어있으니까 그대로 출력됨
alert(`hello ${name}`); // hello 신석 -> ${}'의 중괄호 안에 name이 정상적으로 들어있음. name에 저장된 "신석"이 출력됨