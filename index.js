class HeroiDaVila {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      console.log("Informação inválida!");
      return;
    }
    console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}
const entrada = require("prompt-sync")({ sigint: true });

const nome = entrada("informe o nome do heroi:");
const idade = parseInt(entrada("informe a idade do heroi:"));
const tipo = entrada("informe o tipo(guerreiro,mago,monge ou ninja) do heroi:");

const heroi = new HeroiDaVila(nome, idade, tipo);
console.log(`O nome do heroi: ${heroi.nome}`);
console.log(`A idade do heroi: ${heroi.idade}`);
heroi.atacar();
