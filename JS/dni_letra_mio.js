var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "X", "E", "T"];
function checkDNI(dni) {
    if (dni.length !==9) {
            return "The length is not valid";
    }

    const dniNumber = parseInt(dni.substring(0.7));

    if(dniNumber >= 0 && dniNumber <= 99999999) {
        const letterIndex = dniNumber % 23;
        if (letras[letterIndex] == dni[8]) {
            return "El dni es correcto";
        }
        return "El dni es incorrecto";
    }
}

console.log(checkDNI('51370235B'));