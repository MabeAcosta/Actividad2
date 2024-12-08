// Comparar numeros
const compararNumeros = () => {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado-comparacion');

    if (numero1 > numero2) {
        resultado.textContent = `El numero mayor es: ${numero1}`;
    } else if (numero2 > numero1) {
        resultado.textContent = `El numero mayor es: ${numero2}`;
    } else {
        resultado.textContent = 'Ambos numeros son iguales.';
    }
}

// Mostrar mes
const mostrarMes = () => {
    const mes = Number(document.getElementById('mes').value);
    switch (mes) {
        case 1: alert('Enero'); break;
        case 2: alert('Febrero'); break;
        case 3: alert('Marzo'); break;
        case 4: alert('Abril'); break;
        case 5: alert('Mayo'); break;
        case 6: alert('Junio'); break;
        case 7: alert('Julio'); break;
        case 8: alert('Agosto'); break;
        case 9: alert('Septiembre'); break;
        case 10: alert('Octubre'); break;
        case 11: alert('Noviembre'); break;
        case 12: alert('Diciembre'); break;
        default: alert('Número inválido');
    }
}

// Gestion de arrays
const nombres = [];
const agregarNombre = () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        nombres.push(nombre);
        document.getElementById('lista-nombres').textContent = nombres.join(', ');
    }
}
