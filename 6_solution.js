let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
  

const filtered = arr.filter(user => user.part !== "staff" && user.name !== "보연");
// staff, "보연" 동시에 제외. 때문에 fe 중에서도 수진, 병윤이 남고 be가 남게 됨.

filtered.sort((a,b) => b.age - a.age);
// 내림차순 정렬 
// a가 크면 음수, b가 크면 양수가 나오므로 큰 수인 b가 앞으로 가게 됨.

const newarr = filtered.map(user => user.name);
// newarr 라는 이름으로 이름만 뽑아낸 새 배열 저장.

console.log("최종 이름 배열 :", newarr);
// 출력.

newarr.forEach(name => console.log(name));
// forEach를 사용하여 한 줄씩 이름을 출력함.
