function exibir() {
    var palavras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        palavras[_i] = arguments[_i];
    }
    console.log(palavras);
}
exibir('a', 'b');
exibir('a', 'b', 'c');
exibir('a', 'b', 'c', 'd');
