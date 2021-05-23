var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
    describe("Conversión de RGB a Hex", function() {
        it("convierte los colores básicos", function() {
            var rojoEnHexResultante = converter.rgbAHex(255, 0, 0);
            var verdeEnHexResultante = converter.rgbAHex(0, 255, 0);
            var azulEnHexResultante = converter.rgbAHex(0, 0, 255);

            expect(rojoEnHexResultante).to.equal("ff0000");
            expect(verdeEnHexResultante).to.equal("00ff00");
            expect(azulEnHexResultante).to.equal("0000ff");
        });
    });

    describe("Conversiónde Hex a RGB", function() {
        it("convierte los colores básicos", function() {
            var rojoEnRGBResultante = converter.hexARgb("ff0000");
            var verdeEnRGBResultante = converter.hexARGB("00ff00");
            var azulenRGBResultante = converter.hexARGB("0000ff");

            expect(rojoEnRGBResultante).to.equal([255, 0, 0]);
            expect(verdeEnRGBResultante).to.equal([0, 255, 0]);
            expect(azulenRGBResultante.to.equal([0, 0, 255]));
        });
    });

});