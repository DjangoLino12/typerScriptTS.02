import { Passaro } from "./Passaro";

//Object sem a interface
let papagaio = new Passaro(true, "masculino");
console.log(papagaio);

//Object com a interface
//let papagaio = new Passaro()
console.log(papagaio.velocidadeAtual());

console.log(papagaio.passaroAnda());
