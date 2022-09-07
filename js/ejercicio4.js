let btnExecute4 = document.getElementById("btnExecute4");
let resultEjercicio4 = document.getElementById("resultEjercicio4");
let serieNum4 = [1, 2, 5, 14, 24, 31, 50, 105];

btnExecute4.addEventListener("click", function (e){
    e.preventDefault;
resultEjercicio4.innerHTML = "La serie: " + serieNum4 + "de manera desordenada es: " + desordenar(serieNum4);



})

function 	desordenar(serie) {
    let serieDes = new Array();

    for (let i = 0; i < serieNum4.length; i++) {
        
        serieDes[serieNum4.length -i] = serie[i];
        
    }
    return serieDes;
}