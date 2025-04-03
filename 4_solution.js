//4번 문제

class Person {
    constructor(name, hobby) {
      this.name = name;
      this.hobby = hobby;
    }
  
    getPerson() {
      console.log(`이름: ${this.name}, 취미: ${this.hobby}`);
    }
}

const human = new Person("태은","애니보기")
human.getPerson()
