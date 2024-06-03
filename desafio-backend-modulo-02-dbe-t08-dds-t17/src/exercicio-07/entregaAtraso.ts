type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  return diaAtual > dadosEntrega.estimativaEntrega ? "ENTREGA ATRASADA" : "ENTREGA NAO ATRASADA";
}
export default solucao;
