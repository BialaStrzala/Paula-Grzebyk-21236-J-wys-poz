console.log('Lab 3 zad 2');

// 1
const math1 = require('./math1');

// 2
const Math2Module = require('./math2');
const math2 = new Math2Module(5,6);


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Wczytaj liczbe x: ", function(x){
    rl.question("Wczytaj liczbe y: ", function(y){
        console.log('Sposob 1: ');
        console.log('Suma =' + math1.suma(x,y));
        console.log('Roznica = ' + math1.roznica(x,y));
        console.log('===============');

        console.log('Sposob 2: ');
        console.log('Iloczyn = ' + math2.iloczyn());
        console.log('Iloraz = ' + math2.iloraz());
        rl.close();
    })
})

rl.on("close", function(){
    console.log("Koniec");
    process.exit(0);
});
