//Boolean
let isBoolean: boolean = true;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octa: number = 0o744;
let big: bigint = 100n;

//String
let firstname: string = 'Igor';
let lastname:string = "Rodrigues";
let idade:number = 26;
let profile:string = `${firstname} ${lastname} ${idade} anos`;

//Array

let list: number[] = [1,2,3];

let list1:Array<string> = ["1","2","3"];

//Tuple

let listx: [string, number, boolean] = ["1",1,true];

//São objetos de chave/valor. Onde a chave inicialmente começa com 0, mas podemos altera-lá



enum Color{
  Red = 21,
  Green,
  Blue
}
let c: Color = Color.Green;
console.log(c) // 0

let notSure: unknown = 4;
console.log(notSure); //4

if(typeof notSure === 'number'){
  const numero:number = notSure;
}

console.log(typeof(notSure)); //number


notSure = "maybe a string instead";

notSure.length;
console.log(notSure); //maybe a string instead
console.log(typeof(notSure)); //string


notSure = false;
console.log(notSure); //false
console.log(typeof(notSure)); //boolean

// Any
let anyType:any = 4;
//anyType.ifItExists(); //Ok, mas não irá compilar.

//Void
function print():void{
  console.log("dsfasd");
}

//Undefined and null

let p:undefined = undefined;
let m:null = null;

//Never
function print():never{
  throw new Error('sdfa');
}

let cart: object = {
  name:'fusca',
  ports: '2'
}

let someValue: unknown = "Isso é uma string";
//Lembra que antes o tipo unknown não tinha acesso as propriedades?
//Agora estou afirmando para o TypeScript que aquela variavel é uma string.
//let lengthSomeValue:number = (someValue as string).length;

//Podemos usar a notação com <>
let lengthSomeValue:number = (<string>someValue).length;

