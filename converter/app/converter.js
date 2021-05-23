exports.rgbAHex = function(rojo, verde, azul) {
    var rojoEnHex = rojo.toString(16);
    var verdeEnHex = verde.toString(16);
    var azulEnHex = azul.toString(16);

    return pad(rojoEnHex) + pad(verdeEnHex) + pad(azulEnHex);
};

function pad(valorEnHex) {
    return (valorEnHex.length === 1 ? "0" + valorEnHex : valorEnHex);
};