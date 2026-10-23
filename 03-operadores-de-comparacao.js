// os operadores de comparação servem para comparar dois valores e verificar se uma determinada condição é verdadeira ou falsa.

// DICA: no JavaScript, o resultado de uma comparação é sempre um valor booleano, ou seja, verdadeiro(true) ou falso(false)

// 1 - === igualdade estrita
// o operador de igualdade restrita ele verifica se os dois valores são iguais tanto em TIPO DE DADO e VALOR.


console.log(10 === 10) //true
console.log(10 === 20) //false
console.log(10 ==='10') //false


console.log("----------------------")
// 2 - == igualdade não estrita
// o operador de igualdade não estrita == também comapara valores, mas, de forma resumida, observa apenas o VALOR da comparação, ignorando o tipo de dado.

//CURIOSIDADE: nesse caso, por debaixo dos panos, o JavaScript faz uma conversão de tipos antes de comparar.

console.log(10 == 10) 
console.log(10 == 20) 
console.log(10 =='10')

console.log("----------------")

// 3 - !== diferença estrita
// tanto o operador !== quanto o != verificam se os valores são diferentes. Porém, no caso do operador de !==, ele verifica também o tipo de dado.

console.log (5 !== 3)
console.log (5 !== 5)
console.log (5 !== "5")

console.log("-----------------------")

// 4 - != diferença não estrita
// no caso desse operador, ele verifica apenas o valor, e não o tipo de dado.

console.log(5 != "5")
console.log(5 != 3)

console.log("-------------------------")

// 5 - > maior que 
// esse operador serve para avaliar se um determinado valor é maior que o outro

console.log(7 > 6)
console.log(7 > 9)
console.log(7 > 2)
console.log(7 > 7)

console.log("-----------------------")

// 6 - < menor que
// esse operador serve pra avaliar se um determinado valor é menor que o outro

console.log(7 < 6)
console.log(3 < 6)
console.log(2 < 5)
console.log(7 < 7)

console.log("-----------------")

// 7 - >= maior ou igual
// esse operador avalia se na condição, o elemento de comparação é maior ou igual.

const nota = 7 
console.log(nota >= 7)
console.log(nota >= 8)

console.log("--------------------")

// 8 - <= menor pou igual
// esse operador avalia se na condição, o elemento de comparação é menor ou igual.

console.log(nota <= 7)
console.log(nota <= 8)
console.log(nota <= 6)
