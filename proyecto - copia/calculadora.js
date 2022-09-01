var operandoa;
var operandob;
var operacion;

document.addEventListener("DOMContentLoaded",()=>{
  init();
})

function init(){
    var resultado=document.getElementById('resultado ');
    var sumar=document.getElementById('sumar');
    var restar=document.getElementById('restar');
    var multiplicar=document.getElementById('multiplicar ');
    var dividir=document.getElementById('dividir ');
    var reset=document.getElementById('reset ');
    var cero=document.getElementById('cero');
    var uno=document.getElementById('uno ');
    var dos=document.getElementById('dos ');
    var tres=document.getElementById('tres ');
    var cuatro=document.getElementById('cuatro ');
    var cinco=document.getElementById('cinco');
    var seis=document.getElementById('seis');
    var siete=document.getElementById('siete ');
    var ocho=document.getElementById('ocho ');
    var nueve=document.getElementById('nueve ');
    var punto=document.getElementById('punto ');
   

    uno.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "1";
    }
    dos.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "2";
    }
    tres.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "3";
    }
    cuatro.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "4";
    }
    cinco.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "5";
    }
    seis.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "6";
    }
    siete.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "7";
    }
    ocho.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "8";
    }
    nueve.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "9";
    }
    cero.onclick=function(e){
        resultado.TextContent= resultado.TextContent + "0";
    }
    punto.onclick=function(e){
        resultado.TextContent= resultado.TextContent + ".";
    }

    reset.onclick=function(e){
       resetear;
    }

    sumar.onclick=function(e){
      operandoa=resultado.textContent;
      operacion= "+";
      limpiar();
    }
    restar.onclick=function(e){
        operandoa=resultado.textContent;
        operacion= "-";
        limpiar();
      }
      multiplicar.onclick=function(e){
        operandoa=resultado.textContent;
        operacion= "*";
        limpiar();
      }
      dividir.onclick=function(e){
        operandoa=resultado.textContent;
        operacion= "/";
        limpiar();
      }

      igual.onclick=function(e){
        operandob=resultado.textContent;
        resolver();
      }
  }


  function limpiar(){
    resultado.textContent="";
  }

  function resetear(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operacion="";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
/* window.addEventListener('load', () => {
const display= document.querySelector('.display');
const botones= document.getElementsByClassName('numero');

const arreglobotones=Array.from(boton);

arreglobotones.forEach((boton) =>{
botton.addEventListener('click',() => {
console.log(boton.innerHTLM);


calculadora(button,display)
})
})

})

function calculadora(button,display){
    switch (button.innerHTLM){
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display,button);
            break;
    }
}
function calcular(display){
    display.innerHTLM= eval(display.innerHTLM);
}

function actualizar(display,button){
    if (display.innerHTLM==0){
        display.innerHTLM='';
    }
    display.innerHTLM += button.innerHTLM; //Pone un numero al lado del otro en la pantallla
}

function borrar(display){
    display.innerHTLM=0;
} */