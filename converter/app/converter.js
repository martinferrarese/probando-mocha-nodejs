exports.rgbAHex = function(rojo, verde, azul) {
    var rojoEnHex = rojo.toString(16);
    var verdeEnHex = verde.toString(16);
    var azulEnHex = azul.toString(16);

    return pad(rojoEnHex) + pad(verdeEnHex) + pad(azulEnHex);
};

function pad(valorEnHex) {
    return (valorEnHex.length === 1 ? "0" + valorEnHex : valorEnHex);
};

exports.hexARGB = function(valorEnHex) {
    var rojo = parseInt(valorEnHex.substring(0,2), 16);
    return [rojo, parseInt(valorEnHex.substring(2, 4), 16), parseInt(valorEnHex.substring(4, 6), 16)];
};