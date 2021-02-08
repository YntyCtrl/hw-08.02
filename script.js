let password = document.querySelector('#password')
let pdiv = document.querySelector('#pdiv')
let bad = "Bad"
let few = "Few"






password.addEventListener('input', function(event) { // при изменении поля (потеря фокуса)
    if (password.value.length <= 4){
        pdiv.innerText =  bad;
        
    }
    else if ( password.value.length < 8 ){
        pdiv.innerText = few ;
        
    }
    else{
        pdiv.innerText = "Good";
    }
    });



 


