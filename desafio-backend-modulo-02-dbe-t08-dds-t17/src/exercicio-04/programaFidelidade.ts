function solucao(pontosAcumulados: number, valorCompra: number) {
  let desconto :number
  let valorTotal:number
  if(pontosAcumulados < 100){
    desconto =0
  }else if(pontosAcumulados >= 100 && pontosAcumulados <=500){
    desconto = 0.1
  }else{
    desconto = 0.2
  }
  valorTotal = valorCompra - desconto * valorCompra

  return valorTotal

}
export default solucao;
