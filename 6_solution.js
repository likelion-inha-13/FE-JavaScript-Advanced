let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];


//-- 1번 조건, 2번 조건
let not_staff = []; // staff, 보연을 제외한 객체를 담을 배열
  
for (let i in arr) {
  if (arr[i].part != "staff" && arr[i].name != "보연") {
    not_staff.push(arr[i]);
  }
}

//-- 3번 조건
not_staff.sort((a, b) => b.age - a.age); // 나이 내림차순 정렬
console.table(not_staff);


//-- 4번 조건
let only_name = arr.map( person => person.name );
console.log(only_name);


//-- 5번 조건
only_name.forEach((name) => {
  console.log(name);
});
