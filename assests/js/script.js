
alert('Utiliser un ordinateur pour une meilleur expérience ')
alert('@@  les champs sont encore inaccessible pour le moment')
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
};
// on click function


var jumbo = document.querySelector('.jumbo-2');
var clicked = true
var is760 = false
function func ()
{
    if(clicked &&  is760==true)
    {
        clicked =false
        jumbo.style.height= '530px';
    }
    else if (!clicked && is760==true )
    {
        clicked =true
        jumbo.style.height= '410px';
    }
    
    else if (clicked && is760== false )
    {
        clicked = false
        jumbo.style.height= '700px';
    }
    else
    {
        clicked =true
        jumbo.style.height= '350px';
    }

}

function myFunction(x) {
    if (x.matches) { 
        is760 =true
    } else {
        is760 = false
    }
}

var x = window.matchMedia("(max-width: 766px)")
var bokotra = false
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

let doIt = true
let y = document.querySelectorAll('.toRemove')

function myFunction0(win) {
    if (win.matches) { 
        if (doIt) {
            for (let i = 0; i <= y.length; i++) {
                console.log(y[i])
                y[i].classList.remove('justify-content-center')
                
            }
                     
        }
    } 
    else
    {
        for (let i = 0; i <= y.length; i++) {
            console.log(y[i])
            y[i].classList.add('justify-content-center')
            
        }       
        doIt= true
    }
}

var win = window.matchMedia("(max-width: 991px)")
myFunction0(win) // Call listener function at run time
win.addListener(myFunction)
