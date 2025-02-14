
function alertError() {
    alertbox.render({
        alertIcon: 'error',
        title: 'Invalid Form!',
        message: 'Please verify',
        themeColor: '#A52A2A',
        btnColor: '#A52A2A',
        btnTitle: 'Ok',
        border:true
        });
}

function alertSuccess() {
    alertbox.render({
          alertIcon: 'success',
          title: 'Thank You!',
          message: 'I will get back to you soon as possible',
          btnTitle: 'Ok',
          border:true
        });
}

function emailSend() {
    let email =document.getElementById('email').value;
    if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        
        let parms1 ={
            names : document.getElementById('name').value,
            number : document.getElementById('number').value,
            message : document.getElementById('message').value,
            email : document.getElementById('email').value,
            country : document.getElementById('country').value,
    
       }
       
       emailjs.send("service_msqafz7","template_va8cz0w",parms1);
       alertSuccess();

    } else {
        alertError();
    }

   
}

function emailSend3() {
    

    let email =document.getElementById('email3').value;
    if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        
        let parms1 ={
            email : document.getElementById('email').value,        
       }
       
       emailjs.send("service_msqafz7","template_va8cz0w",parms1);
       alertSuccess();

    } else {
        alertError();
    }
    
   

   
}
function emailSend1() {

    let email =document.getElementById('email3').value;
    if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        
        let parms ={
            names : document.getElementById('name1').value,
            number : document.getElementById('number1').value,
            message : document.getElementById('message1').value,
            email :  document.getElementById('email1').value,
            country : document.getElementById('country1').value,
   
       }
       emailjs.send("service_msqafz7","template_va8cz0w",parms1);
       alertSuccess();
       

    } else {
        alertError();
        
    }
    
  

}
