let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];

  // filtered에 staff와 "보연"을 제외하고 저장
  const filtered = arr.filter(user => user.part !== "staff" && user.name !== "보연");
  filtered.sort((a,b)=> b.age-a.age); //내림차순으로 정렬
  const new_arr = filtered.map(user=>user.name); //이름만 뽑아서 new_arr에 저장

  console.log("최종 이름 배열:" , new_arr); //new_arr 출력

  // forEach()를 사용하여 배열의 모든 요소를 하나씩 실행
  new_arr.forEach((user,index)=> {console.log(`${user}`);});