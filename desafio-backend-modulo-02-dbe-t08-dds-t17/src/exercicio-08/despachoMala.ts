type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  let passageirosComMalaPesada = dadosPassageiros.filter(passageiro => passageiro.pesoMala > 23);
  
  if(passageirosComMalaPesada.length === 0) {
    return "SEM PASSAGEIROS";
  } else {
    let nomesPassageiros = passageirosComMalaPesada.map(passageiro => passageiro.nome);
    return nomesPassageiros.join(" - ");
  }
}
export default solucao;
