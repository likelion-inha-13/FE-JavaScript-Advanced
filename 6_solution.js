let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
  
  
  const filterd1 = arr.filter(arr => arr.part != "staff");
 

  // const filterd2 = filterd.filter(filterd => filterd.part =="fe");

  const filterd2 = filterd1.filter(filterd1 => filterd1.name !="보연");

  filterd2.sort((a,b) => b.age-a.age);

let names = filterd2.map(filterd2 => filterd2.name);

console.log("최종 이름 배열 : ["+ names + "]" );

names.forEach((names) => console.log(names));