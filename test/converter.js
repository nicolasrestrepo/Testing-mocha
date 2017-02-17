/*module dependecies*/

var expect = require('chai').expect;
var converter = require('../app/converter.js');

describe('Temperature conversor', function() {
    describe('Celsius  to Fahrenheit conversion', function() {
        it('Converts 100C to Fahrenheit', function() {

            var fh = converter.toFahrenheit(100);

            expect(fh).to.equal(212);
        })
    })
    describe('Fahrenheit to Celsius conversion', function() {
        it('Converts 212F to Celsius', function() {

            var fh = converter.toCelsius(212);

            expect(fh).to.equal(100);
        })
    })
})