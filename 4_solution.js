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

const lby = new Person("임병윤", "축구"); // new로 새로운 객체 생성
lby.getPerson();