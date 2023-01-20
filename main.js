function ValidaCPF(CPFEnviado) {
  Object.defineProperty(this, "CPFLimpo", {
    enumerable: true,
    get: () => CPFEnviado.replace(/\D+/g, ""),
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.CPFLimpo === "undefined") return false;
  if (this.CPFLimpo.length !== 11) return false;
  if (this.ehSequencia()) return false;
  const CPFParcial = this.CPFLimpo.slice(0, 9);
  const digito01 = criaDigito(CPFParcial);
  const digito02 = criaDigito(CPFParcial + digito01);
  const novoCPF = CPFParcial + digito01 + digito02;
  return novoCPF === this.CPFLimpo;
};

function criaDigito(CPFParcial) {
  const CPFArray = Array.from(CPFParcial);
  let regressivo = CPFArray.length + 1;
  const total = CPFArray.reduce((ac, num) => (ac += Number(num) * regressivo--), 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
}

ValidaCPF.prototype.ehSequencia = function () {
  return (sequencia = this.CPFLimpo[0].repeat(this.CPFLimpo.length) === this.CPFLimpo);
};

function CriaCPF() {
  const parte01 = String(geraNumeroAleatorio());
  const parte02 = String(geraNumeroAleatorio());
  const parte03 = String(geraNumeroAleatorio());
  const CPFParcial = parte01 + parte02 + parte03;
  const digito01 = criaDigito(CPFParcial);
  const digito02 = criaDigito(CPFParcial + digito01);
  return `${parte01}.${parte03}.${parte03}-${digito01}${digito02}`;
}

function geraNumeroAleatorio() {
  const num = Math.floor(Math.random() * (999 - 1) + 1);
  return num < 100 ? `0${num}` : num;
}

// *-------------------------------------------------------- 
// *Caso queia gerar um número de CPF aleatório, novo.
// *--------------------------------------------------------
let CPF = CriaCPF();
let CPFAtual = new ValidaCPF(CPF);

while (!CPFAtual.valida()) {
  CPF = CriaCPF();
  CPFAtual = new ValidaCPF(CPF);
}

// *-------------------------------------------------------- 
// *Caso queria verificar um número de CPF já existente, 
// *basta desconsiderar as linhas 49 a 55, e apenas
// *atribuir um valor arbitrário a CPFExistente.
// *Conforme exemplo abaixo.
// *--------------------------------------------------------
// const CPFAtual = new ValidaCPF("813.286.286-47");

console.log(CPFAtual.valida() ? `${CPF} - CPF Válido!` : `${CPF} - CPF Inválido!`);
