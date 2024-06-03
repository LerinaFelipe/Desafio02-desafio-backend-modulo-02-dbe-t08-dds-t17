function solucao(senhaDigitada: string, senhaCriptografada: string) {
  let teste: string
   teste= "cubos" + senhaDigitada + "cubos"
   if(teste===senhaCriptografada){
  return ("LOGIN AUTORIZADO")
   }else{
    return ("LOGIN NAO AUTORIZADO")
   }
  }
  export default solucao;