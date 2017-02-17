module.exports.toFahrenheit = function(temperatura) {
    return (temperatura * 9 / 5) + 32;
}

module.exports.toCelsius = function(temperatura) {
    return (temperatura - 32) * 5 / 9;
}