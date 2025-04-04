let arr = [
  { part: "fe", name: "수진", age: 22 },
  { part: "fe", name: "병윤", age: 23 },
  { part: "fe", name: "보연", age: 21 },
  { part: "staff", name: "수빈", age: 24 },
  { part: "be", name: "기현", age: 25 }
];

const members = arr.filter(
  member => member.part !== "staff" && !(member.part === "fe" && member.name === "보연")
);
const sortedMembers = members.sort((a, b) => b.age - a.age);
const names = sortedMembers.map(member => member.name);

console.log("최종 이름 배열 : ", names);
names.forEach(name => console.log(name));
