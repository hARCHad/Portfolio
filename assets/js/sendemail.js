function emailSend() {
    

    let parms1 ={
        names : document.getElementById('name').value,
        number : document.getElementById('number').value,
        message : document.getElementById('message').value,
        email : document.getElementById('email').value,
        country : document.getElementById('country').value,

   }

   emailjs.send("service_msqafz7","template_va8cz0w",parms1)
   
}

function emailSend3() {
    

    let parms1 ={        
        email : document.getElementById('email3').value,      
   }

   emailjs.send("service_msqafz7","template_va8cz0w",parms1)
   
}
function emailSend1() {

    let parms ={
         names : document.getElementById('name1').value,
         number : document.getElementById('number1').value,
         message : document.getElementById('message1').value,
         email :  document.getElementById('email1').value,
         country : document.getElementById('country1').value,

    }

    emailjs.send("service_msqafz7","template_va8cz0w",parms)

    
  

}
