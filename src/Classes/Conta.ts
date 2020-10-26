//Aprendendo um pouco sobre classes

class Conta{
  //atributos
  private static totalContas = 0;
  private numero:number;
  private titular:string;
  private saldo:number;

  //Construtor para inicializar os atributos
  constructor(numero:number,titular:string,saldo:number){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
    Conta.totalContas += 1;
  }

  //metodos - comportamento da classe
  sacar(valor:number){
    this.saldo -= valor;
  }
  depositar(valor:number){
    this.saldo += valor;
  }
  extrato(){
    console.log(`Conta: ${this.numero}. Saldo: ${this.saldo}`);
  }
  get getTitular():string{
    return this.titular;
  }
  set setTitular(nome:string){
    this.titular = nome;
  }
  static get getTotalContas():number{
    return Conta.totalContas;
  }
}

const minhaConta = new Conta(71548,'Igor Rodrigues',48.5);
const minhaConta2 = new Conta(71548,'Igor Rodrigues',48.5);
const minhaConta3 = new Conta(71548,'Igor Rodrigues',48.5);

//Utilizamos os métodos get/set como se fosse propriedades.
minhaConta.setTitular = 'João';
console.log(minhaConta.getTitular); // João

console.log(Conta.getTotalContas);
