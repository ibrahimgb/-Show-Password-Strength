const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");
const passwordStrengthMsg = document.getElementById("password-strength");

passwordCheck.addEventListener('input', ()=>{

    if(!(password.value===passwordCheck.value)){
        passwordStrengthMsg.style.display="block";
        passwordStrengthMsg.style.color="red";
        passwordStrengthMsg.innerText= "password dos not match";
        console.log("password dos not match");
    }else{
        passwordStrengthMsg.style.display="none";
      
    }
    
});

password.addEventListener('input', ()=>{
    if(password.value.length>0){
        passwordStrengthMsg.style.display="block";
    }else{
        passwordStrengthMsg.style.display="none";
    }
    let check = 0;
  
    hasLowerCase = (string)=>{
        let i = string.length;
        while (i--) {
        if(string[i] === string[i].toLowerCase()&& isNaN(string[i])){
            console.log("has Lower Case");
            return 1;
            
        }
        }
        return 0;
    }

    hasUpperCase = (string)=>{
        let i = string.length;
        while (i--) {
        if(string[i] === string[i].toUpperCase()&& isNaN(string[i])){
            console.log("has Upper Case");
            return 1;
            
        }
        }
        return 0;
    }

    hasNumber = (string)=>{
        let i = string.length;
        while (i--) {
        if(!isNaN(string[i])){
            console.log("has Number");
            return 1;
            
        }
        }
        return 0;
    }

   
    

    check = check + hasLowerCase(password.value);
    check = check + hasUpperCase(password.value);
    check = check + hasNumber(password.value);


    if(password.value.length<4){
        passwordStrengthMsg.innerText= "you have a weak password";
    }else if(password.value.length>=4 &&password.value.length<=15 && check>1){
        passwordStrengthMsg.innerText= "you have a good password";
    }else if(password.value.length>=15 && check>2){
        passwordStrengthMsg.innerText= "you have a graite password";
    }else{
        passwordStrengthMsg.innerText= "use uppercase and numbers to strengthen your password";
    }



    console.log(check);
  
});
