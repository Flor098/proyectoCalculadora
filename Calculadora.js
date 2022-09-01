class Calculadora{
    sumar(num1,num2){
        return num1+num2;
    } 

    restar(num1,num2){
        return num1-num2;
    } //anda

    multiplicar(num1,num2){
        return num1*num2;
    } //anda

    dividir(num1,num2){
        return num1/num2;
    } //anda

    raiz(num1){
        return Math.sqrt(num1)
    }

    elevar(num1,num2){
        return Math.pow(num1,num2)
    
    } //anda
    cambiar_signo(num1){
        return (num1)*(-1);
    }

    porcentaje(num1,porcentaje){
        return (num1*porcentaje)/100;
    }
 }