function solucao(vendasDiarias: number[]) {
  let total = vendasDiarias.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  return total;
}
export default solucao;
