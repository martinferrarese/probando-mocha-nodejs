var expect = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function(){
    
    describe("API que convierte de hex a RGB", function() {
        var url = "http://localhost:3000/hexARGB?valorEnHex=00ff00";

        it("debe retornar un estado 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("debe convertir el valor de hex a RGB", function(done) {
            request(url, function(error, response, body){
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });

    describe("API que convierte RGB a hex", function() {
        var url = "http://localhost:3000/rgbAHex?rojo=255&verde=0&azul=0";

        it("debe retornar un estado 200", function(done) {
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("debe convertir un valor RGB a hex", function(done) {
            request(url, function(error, response, body){
                expect(body).to.equal("ff0000");
                done();
            });
        });
    });
});