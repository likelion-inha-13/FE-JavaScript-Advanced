let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];

  const arr1 = arr.filter(arr => arr.part != "staff"); // staff 제거

  const arr2 = arr1.filter(arr1 => arr1.name != "보연"); // 보연 제거

  arr2.sort((a, b) => b.age - a.age); // 나이 내림차순 정렬

  let arr3 = arr2.map(members => members.name)
  console.log(arr3); // 이름만 뽑아 배열 만들기
  
  arr3.forEach(name => console.log(name)); // 한줄씩 출력
