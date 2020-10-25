interface LoginFuncionario{
  login: (usuario:string,senha:number)=>boolean;
}

abstract class Funcionario{
  protected nome:string;
  protected endereco:string;

  constructor(nome:string, endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }

}

class Gerente extends Funcionario implements LoginFuncionario{
  protected salario:number;
  protected meta:number;

  constructor(salario:number, meta:number, nome:string, endereco:string){
    super(nome,endereco);
    this.salario = salario;
    this.meta = meta;
  }
  login(usuario:string,senha:number){
    return true;
  }
}

class Presidente extends Funcionario implements LoginFuncionario{
  // seus atributos.
  constructor(nome:string, endereco:string){
    super(nome,endereco);
    // inicialização do seus atributos...
  }
  login(usuario:string,senha:number){
    //processo de autenticação, retorna true/false
    return true;
  }
}

const presi = new Presidente('Igor','45');

function autentica(U:LoginFuncionario){

}

autentica(presi);
