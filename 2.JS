valor1 = 0
valor2 = 1
valor3 = 0
console.log('Consulta da Sequência de Fibonacci')

valorParaSerValidado = 22

while (valorParaSerValidado > valor3)
{
    valor3 = valor1 + valor2
    valor1 = valor2
    valor2 = valor3
}

if (valorParaSerValidado == 0 || valorParaSerValidado == 1 || valorParaSerValidado == valor3)
{
    console.log('O número faz parte da sequência de Fibonacci.')
}
else 
{
    console.log('O número digitado não faz parte da sequência de Fibonacci.')
}