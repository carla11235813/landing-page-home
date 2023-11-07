//Navegação Manual 
var radio = document.querySelector('.manual-btn')

//contador
var cont = 1

//radio1 ja fique marcada quando o site for carregado
document.getElementById('radio1').checked = true 

//tempo de amostra das imagens
setInterval(() => {
    //função responsável por passar uma imagem para outra
    proximaImg()
}, 5000 /*tempo da img 5 segundos*/ )

//criando a função
function proximaImg(){
    //verificador de imagem atual
    cont ++

    if(cont > 4){
        cont = 1
    } 

    //mudar fundo das bolinhas automaticamente
    document.getElementById('radio'+cont).checked = true 
}
