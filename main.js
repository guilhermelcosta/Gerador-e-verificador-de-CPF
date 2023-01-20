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
  const digito01 = this.criaDigito(CPFParcial);
  const digito02 = this.criaDigito(CPFParcial + digito01);
  const novoCPF = CPFParcial + digito01 + digito02;
  return novoCPF === this.CPFLimpo;
};

ValidaCPF.prototype.criaDigito = function (CPFParcial) {
  const CPFArray = Array.from(CPFParcial);
  let regressivo = CPFArray.length + 1;
  const total = CPFArray.reduce((ac, num) => (ac += Number(num) * regressivo--), 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.ehSequencia = function () {
  return (sequencia = this.CPFLimpo[0].repeat(this.CPFLimpo.length) === this.CPFLimpo);
};

const CPF = new ValidaCPF("705.484.450-52");
console.log(CPF.valida() ? "CPF Válido!" : "CPF Inválido!");
