let inputNum1 = document.getElementById("inputNum1");
let btnExecute5_1 = document.getElementById("btnExecute5_1");
let resultEjercicio5_1 = document.getElementById("resultEjercicio5_1");


btnExecute5_1.addEventListener("click", function (e){
    e.preventDefault;
    flag = true;
    let num; 
    if (inputNum1.value == 0 || inputNum1.value == "" || isNaN(inputNum1.value)){
        inputNum1.classList.remove("is-valid");
        inputNum1.classList.add("is-invalid");
        flag = false;         
    }
    else{
        inputNum1.classList.remove("is-invalid");
        inputNum1.classList.add("is-valid");
        num = parseFloat(inputNum1.value);   
    }
    
    if (flag) {
        if(num%2 == 0){
            resultEjercicio5_1.innerHTML = "El número es par";
        }else{
            resultEjercicio5_1.innerHTML = "El número es impar";
        }
        
    }else{
        resultEjercicio5_1.innerHTML = "Porfavor ingrese un número valido";
    }
    
    
})

