let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];
  
  const filtered = arr.filter(lion => lion.part === "fe" && "be");
  console.log(filtered);
  


  filtered.splice (2,2);
  console.log(filtered);


let names = filtered.map(member => member.name);

name.forEach(name => console.log(name))
  
