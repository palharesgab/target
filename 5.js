function inverterString(palavra) {
    var stringInvertida = "";
    for (var i = palavra.length - 1; i >= 0; i--) { 
        stringInvertida += palavra[i]; 
    }
    console.log(stringInvertida)
}

inverterString('Target Sistemas');


