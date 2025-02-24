const buttonSorteador = document.querySelector(".button-sortear")


function sorteio(){
    let initialNumber = Math.ceil(document.querySelector(".input-min").value)
    let finalNumber = Math.floor(document.querySelector(".input-max").value)

    initialNumber = Math.ceil(initialNumber);
    finalNumber = Math.floor(finalNumber);

    if (initialNumber >= finalNumber) {
        alert("O número inicial deve ser menor que o final!");
        return;
    }


    let numeroSorteado = Math.floor(Math.random() * (finalNumber - initialNumber + 1)) + initialNumber;
    document.getElementById("resultado").innerHTML = `🎉Número Sorteado: ${numeroSorteado}🎉`;
    

    document.querySelector(".input-min").value = "";
    document.querySelector(".input-max").value = "";


    // console.log(initialNumber, finalNumber)
}


buttonSorteador.addEventListener("click", sorteio)