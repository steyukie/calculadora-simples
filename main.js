//Chamo as variáveis
document.addEventListener("DOMContentLoaded", function(){
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var formula = document.getElementById("formula")
    var resultado = document.getElementById("resultado")
    var input = document.querySelectorAll("input")

//function da opção
//"change" só quando tira o foco do obj
    formula.addEventListener("change", function(){
        var num1Valor = num1.value
        var num2Valor = num2.value

//.value para resgatar valor do input
//colocamos cases para cada option (operação)
//fórmula para calcular automaticamente
//nome() para chamar função da fórmula
//PRECISA DE BREAK! SENÃO NÃO PARA E NÃO VOLTA!!
        switch(formula.value){
            case "somar":
                resultado.innerHTML = parseFloat(num1Valor) + parseFloat(num2Valor)
                somar()
                break
            case "subtrair":
                resultado.innerHTML = parseFloat(num1Valor) - parseFloat(num2Valor)
                subtrair()
                break
            case "multiplicar":
                resultado.innerHTML = parseFloat(num1Valor) * parseFloat(num2Valor)
                multiplicar()
                break
            case "dividir":
                resultado.innerHTML = parseFloat(num1Valor) / parseFloat(num2Valor)
                dividir()
                break
        }
    })

//aqui são as functions dos inputs
//sempre chamar no js, senão não funciona
//forEach para chamar um array dentro de uma função
//forEach pq tem 2 inputs do user
    function somar(){
            input.forEach(element => {
                element.addEventListener("keyup", function(){
                    var num1Valor = num1.value
                    var num2Valor = num2.value

                    console.log('digitando')
                    resultado.innerHTML = parseFloat(num1Valor) + parseFloat(num2Valor)
                })
            });
    }

    function subtrair(){
            input.forEach(element => {
                element.addEventListener("keyup", function(){
                    var num1Valor = num1.value
                    var num2Valor = num2.value

                    console.log('digitando')
                    resultado.innerHTML = parseFloat(num1Valor) - parseFloat(num2Valor)
                })
            });
    }

    function multiplicar(){
            input.forEach(element => {
                element.addEventListener("keyup", function(){
                    var num1Valor = num1.value
                    var num2Valor = num2.value

                    console.log('digitando')
                    resultado.innerHTML = parseFloat(num1Valor) * parseFloat(num2Valor)
                })
            });
    }

    function dividir(){
            input.forEach(element => {
                element.addEventListener("keyup", function(){
                    var num1Valor = num1.value
                    var num2Valor = num2.value

                    console.log('digitando')
                    resultado.innerHTML = parseFloat(num1Valor) / parseFloat(num2Valor)
                })
            });
    }
})

//cabô :)