const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const form = document.querySelector("#form")
const result = document.querySelector("#pResult")

form.addEventListener("submit", sumarInputs)

function sumarInputs (event) {
   console.log({event})
   event.preventDefault()
   const suma = input1.value + input2.value;
   result.innerHTML = `Resultado: ${suma}`;
}