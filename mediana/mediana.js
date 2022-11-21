function esPar(lista) {
    // numero / 2
    // (numero % 2)
    return !(lista.length % 2);
}
// function esImpar(lista) {
//     return lista.length % 2;
// }

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if(listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        // const mitad1ListaPar = lista[(lista.length / 2) - 1];
        // const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        calcularPromedio(listaMitades)
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, valorNuevo) {
        return valorAcumulado + valorNuevo;
    }
    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;

    // const result = Array.isArray(lista)

    console.log(promedio);
    return promedio;
}

function ordenarLista(listaDesordenada) {
    function ordernarListaSort(valorAcumulado, valorNuevo) {
        // if(valorAcumulado > valorNuevo) {
        //     return 1;
        // } else if(valorAcumulado == valorNuevo) {
        //     return 0;
        // } else if(valorAcumulado < valorNuevo) {
        //     return -1;
        // }
        return valorAcumulado - valorNuevo;
    }
    const lista = listaDesordenada.sort(ordernarListaSort);
    // const ordenarLista = lista.sort((a,b) => a - b);

    return lista;
}