type User1 = {
  username: String;
  password:number;
}
type Person1 = {
  name:string;
  age:number;
  address?:string;

} & User1;

const person: Person1 = {
  name: 'Igor Rodrigues',
  age:26,
  username:'igorsteixeira94',
  password:123456
}

//Manipulando tipos primitivos
type nsid = number | string; //crei um tipo chamado nsid que pode ser um number ou string;

function getUser( id: nsid){}
function getCustomer( id: nsid){}

type Platform = 'Windows' | 'Linux' | 'MacOS';

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform('ios'); // Retorna erro!
renderPlatform('Windows'); // Retorna Windows
