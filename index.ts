import promptSync from "prompt-sync"

let prompt = promptSync ()
let n1 =  parseInt(prompt("digite seu primeiro número: "))
let n2 =  parseInt(prompt("digite seu segundo número: "))

let op = prompt("Selecione uma operação: Soma (+) , Subtração (-), Multiplicação (*), Divisão (/): ")

if (op == "+") {
    console.log(`A soma é igual a: ${n1 + n2}`);

} else if (op == "-") {
    console.log(`A subtração é igual a: ${n1 + n2}`);

} else if (op == "*") {
    console.log(`A multiplicação é igual a: ${n1 + n2}`);


} else if (op == "/") {
    console.log(`A divisão é igual a: ${n1 + n2}`);

} else {
    console.log("Operação inválida!" );

}
/*

Git:
 echo "# calculadora-ts" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mallan007/calculadora-ts.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/mallan007/calculadora-ts.git
git branch -M main
git push -u origin main

Dependência:
npm install --save prompt-sync-history

*/