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

//person 클래스의 인스턴스 생성하고 이름과 취미를 입력함
const pepole = new Person ("채부경","유튜브 보기");
pepole.getPerson() //getPerson 호출하여 출력