let btnExecute4 = document.getElementById("btnExecute4");
let resultEjercicio4 = document.getElementById("resultEjercicio4");
let serieNum4 = [1, 2, 5, 14, 24, 31, 50, 105];
let serieDes = [];

btnExecute4.addEventListener("click", function (e){
    e.preventDefault;   
    serieDes = serieNum4;
    let j = 0;
    for (let i = (serieNum4.length) -1; i < 1; i--) {
    
        

    serieDes[j] = serieNum4[i];

    j = j + 1;       
    
    }
    
    resultEjercicio4.innerHTML = "La serie: " + serieNum4 + " desordenada, se ve de la siguiente manera: <br/>" + serieDes;
          
      
}
)

 
