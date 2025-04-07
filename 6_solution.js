let arr = [
    { part: "fe", name: "수진", age: 22 },
    { part: "fe", name: "병윤", age: 23 },
    { part: "fe", name: "보연", age: 21 },
    { part: "staff", name: "수빈", age: 24 },
    { part: "be", name: "기현", age: 25 }
  ];

  const filtered = arr.filter(arr1=> arr1.part !== "staff" );

  const filtered2 = filtered.filter(arr1=>arr1.name !=="보연");
  filtered2.sort((a,b)=>b.age-a.age);

  const newArray = filtered2.map(function(person){
    return person.name;
  });

  console.log("최종 이름 배열: ")
  console.log(newArray);
  newArray.forEach(function(name){
    console.log(name);
  });
