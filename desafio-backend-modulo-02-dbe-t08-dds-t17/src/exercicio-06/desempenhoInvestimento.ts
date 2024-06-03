function solucao(resultados: number[]) {
  let { lucro, prejuizo } = resultados.reduce((contagem, resultado) => {
    if(resultado > 0) {
      contagem.lucro++;
    } else if(resultado < 0) {
      contagem.prejuizo++;
    }
    return contagem;
  }, { lucro: 0, prejuizo: 0 });

  if(lucro > prejuizo){
    return "POSITIVO";
  } else if(prejuizo > lucro){
    return "NEGATIVO";
  } else{
    return "NEUTRO";
  }
}
export default solucao;
