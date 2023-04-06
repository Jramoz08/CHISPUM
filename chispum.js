function chispum(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'chispum';
    }

    else if (num % 3 == 0) {
        return 'chis';
    }

    else if (num % 5 == 0) {
        return 'pum';
    }

    return num;
}

console.log("Chispum");

console.log("envio un 15 => " + chispum(15));

module.exports = chispum;