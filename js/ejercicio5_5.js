let inputNum1 = document.getElementById("inputNum1");
let inputNum2 = document.getElementById("inputNum2");
let inputNum3 = document.getElementById("inputNum3");
let btnExecute5_1 = document.getElementById("btnExecute5_1");
let resultEjercicio5_1 = document.getElementById("resultEjercicio5_1");


btnExecute5_1.addEventListener("click", function (e){
    e.preventDefault;
    flag = true;
    let a = 0;
    let b = 0;
    let c = 0;
    
    if (inputNum1.value < 0 || inputNum1.value == ""){
        inputNum1.classList.remove("is-valid");
        inputNum1.classList.add("is-invalid");
        flag = false;         
    }
    else{
        inputNum1.classList.remove("is-invalid");
        inputNum1.classList.add("is-valid");
        a=parseFloat(inputNum1.value);   
    }
    if ((inputNum2.value < 0 || inputNum2.value == "")){
        inputNum2.classList.remove("is-valid");
        inputNum2.classList.add("is-invalid");  
        flag = false;       
    }
    else{
        inputNum2.classList.remove("is-invalid");
        inputNum2.classList.add("is-valid"); 
        b=parseFloat(inputNum2.value);   
    }
    if ((inputNum3.value < 0 || inputNum3.value == "")){
        inputNum3.classList.remove("is-valid");
        inputNum3.classList.add("is-invalid");  
        flag = false;       
    }
    else{
        inputNum3.classList.remove("is-invalid");
        inputNum3.classList.add("is-valid");   
        c=parseFloat(inputNum3.value);   
    }
   
    if(flag){

        if(a == b+c){
            resultEjercicio5_1.innerHTML = "El número: " + a + " es igual a la suma de: "+ b + " + " + c;
        }if(b == a+c){
            resultEjercicio5_1.innerHTML = "El número: " + b + " es igual a la suma de: "+ a + " + " + c;
        }if(c == a+b){
            resultEjercicio5_1.innerHTML = "El número: " + c + " es igual a la suma de: "+ a + " + " + b;
        }if(a != b+c && b != a+c && c != a+b){
            resultEjercicio5_1.innerHTML = "Ninguno de los 3 numeros es la suma de los otros 2 ";
        }
       
    }else{
        resultEjercicio5_1.innerHTML = "Porfavor ingrese un número valido";
    }
    
    
    
        
    
    
    
})


