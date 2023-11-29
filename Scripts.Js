let InputResultado = document.querySelector("#Resultado");

let Resultado = InputResultado.innerHTML;

let Sinal = '';

let PrimeiroValor = 0;
let SegundoValor = 0;

function insert(x){
    let Atual = InputResultado.innerHTML;
    InputResultado.innerHTML = Atual + x;
}

function ac(){
    InputResultado.innerHTML = '';
    Sinal = '';
    PrimeiroValor = 0;
    SegundoValor = 0;
}

function SignalChanger(){
    InputResultado.innerHTML = InputResultado.innerHTML * -1;
}

function Porcentagem(){
    InputResultado.innerHTML = InputResultado.innerHTML / 100;
}

function Divisão(){
    Sinal = '/';
    PrimeiroValor = InputResultado.innerHTML;
    InputResultado.innerHTML = '';
    console.log(PrimeiroValor);
    console.log(Sinal);
}

function Multiplicação(){
    Sinal = 'x';
    PrimeiroValor = InputResultado.innerHTML;
    InputResultado.innerHTML = '';
    console.log(PrimeiroValor);
    console.log(Sinal);
}

function Subtração(){
    Sinal = '-';
    PrimeiroValor = InputResultado.innerHTML;
    InputResultado.innerHTML = '';
    console.log(PrimeiroValor);
    console.log(Sinal);
}

function Adição(){
    Sinal = '+';
    PrimeiroValor = InputResultado.innerHTML;
    InputResultado.innerHTML = '';
    console.log(PrimeiroValor);
    console.log(Sinal);
}

function Igual(){
    SegundoValor = InputResultado.innerHTML;

    if( Sinal === '/') {
        let Result = PrimeiroValor/SegundoValor; 
        InputResultado.innerHTML = Result.toFixed(2); 
    } else if ( Sinal === 'x') {
        let Result = PrimeiroValor*SegundoValor; 
        InputResultado.innerHTML = Result; 
    } else if ( Sinal === '-') {
        let Result = PrimeiroValor-SegundoValor; 
        InputResultado.innerHTML = Result; 
    } else if ( Sinal === '+') {
        let Result = Number(PrimeiroValor) + Number(SegundoValor);
        InputResultado.innerHTML = Result; 
    } 
}






