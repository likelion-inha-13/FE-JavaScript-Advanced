let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
  
//1. "staff"인 멤버는 제외합니다
let tmp = arr.filter(n => (n.part!="staff"));
console.log(tmp);
//2. "fe" 파트는 남기되, "보연"이라는 이름은 제외
let tmp2 = tmp.filter(n => n.name!="보연");
console.log(tmp2);
//3. 남은 멤버들을 나이(age) 내림차순으로 정렬
tmp2.sort((a,b)=> b.age-a.age);
console.log(tmp2);
//4. 이름만 뽑아서 새 배열에 저장합니다. 
let tmp4 = tmp2.map(n => (n.name));
console.log(tmp4);
//(map) 5. 이름 배열을 forEach()를 사용해 한 줄씩 출력해보세요
tmp4.forEach((v,i)=>{
  console.log(`${v}`);
});