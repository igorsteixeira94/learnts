class Pessoa{
  nome:string;
  endereco:string;

  constructor(nome:string,endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }

  autentica(){
    console.log(`Usuario: ${this.nome}`);
  }
}

class Fisica extends Pessoa{
  cpf:string;

  constructor(nomeCompleto:string,endereco:string,cpf:string){
    super(nomeCompleto,endereco);
    this.cpf = cpf;
  }
  autentica(){
    super.autentica();
    console.log(`Senha: ${this.cpf}XX`);
  }
}

class Juridica extends Pessoa{
  cnpj:string;

  constructor(nomeCompleto:string,endereco:string,cnpj:string){
    super(nomeCompleto,endereco);
    this.cnpj = cnpj;
  }
}

const p1 = new Fisica('Igor Rodrigues', 'Rua a','111111111');
const p2 = new Juridica('Corporação IR', 'Rua B','0000000000000');


console.log(p1.nome);
console.log(p2.nome);
p1.autentica();

function contrata(contratado:Pessoa){
  console.log(`${contratado.nome}, você é o mais novo contratado`);
}

contrata(p1);
