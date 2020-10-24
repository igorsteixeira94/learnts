interface User {
  username: String;
  password:number;
}

interface Person extends User{
  name:string;
  age:number;
  address?:string;

}

const person1: Person = {
  name: 'Igor Rodrigues',
  age:26,
  username:'igorsteixeira94',
  password:123456
}
