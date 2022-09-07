let inputNum1 = document.getElementById("inputNum1");
let inputNum2 = document.getElementById("inputNum2");
let inputNum3 = document.getElementById("inputNum3");
let btnExecute5_1 = document.getElementById("btnExecute5_1");
let resultEjercicio5_1 = document.getElementById("resultEjercicio5_1");


btnExecute5_1.addEventListener("click", function (e){
    e.preventDefault;
    serieNum5_1 = new Array();
    flag = true;
    
    if (inputNum1.value < 0 || inputNum1.value >100 || inputNum1.value == ""){
        inputNum1.classList.remove("is-valid");
        inputNum1.classList.add("is-invalid");
        flag = false;         
    }
    else{
        inputNum1.classList.remove("is-invalid");
        inputNum1.classList.add("is-valid");
        serieNum5_1.push(parseFloat(inputNum1.value));   
    }
    if ((inputNum2.value < 0 || inputNum2.value > 100  || inputNum2.value == "")){
        inputNum2.classList.remove("is-valid");
        inputNum2.classList.add("is-invalid");  
        flag = false;       
    }
    else{
        inputNum2.classList.remove("is-invalid");
        inputNum2.classList.add("is-valid"); 
        serieNum5_1.push(parseFloat(inputNum2.value));   
    }
    if ((inputNum3.value < 0 || inputNum3.value > 100  || inputNum3.value == "")){
        inputNum3.classList.remove("is-valid");
        inputNum3.classList.add("is-invalid");  
        flag = false;       
    }
    else{
        inputNum3.classList.remove("is-invalid");
        inputNum3.classList.add("is-valid");   
        serieNum5_1.push(parseFloat(inputNum3.value));   
    }
    console.log(serieNum5_1);
    
    if (flag) {
        resultEjercicio5_1.innerHTML = "El número mas grande de los 3 ingresador es: " + Mayor(serieNum5_1);
    }else{
        resultEjercicio5_1.innerHTML = "Porfavor ingrese un número valido";
    }
    
    
})


function Mayor(serie){
    let numMayor = 0;
    for (let i = 0; i < serie.length; i++) {
   
    if(serie[i] > numMayor){
        numMayor = serie[i];
    }     
    }
return numMayor; 
}