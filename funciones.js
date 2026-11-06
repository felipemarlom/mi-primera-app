
const boton = document.getElementById("boton");

boton.addEventListener("click", ejecutar);

function ejecutar() {
  const valor = document.getElementById("numero").value;
  const numero = Number(valor);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (valor.trim() === "" ||
      !Number.isInteger(numero) ||
      numero < 1 ||
      numero > 100) {
    resultado.textContent = "Ingresa un número entre 1 y 100.";
    return;
  }

  for (let i = 0; i < numero; i++) {
    const linea = document.createElement("p");
    linea.textContent = "Felipe";
    resultado.appendChild(linea);
  }
}
