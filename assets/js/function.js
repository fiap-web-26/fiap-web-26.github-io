//diferenças entre arrow function e funções nominais

const resultado = document.querySelector("#resultado")

let myFunc1 = {
    showArguments (){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};
myFunc1.showArguments(
    "Avanti Palestra",
    "Full-Stack Developer",
    "react",
    "nodejs",
    "typescript"
);

let myFunc2 = {
    showArguments: () => {
    //    resultado.innerHTML = arguments;
     //   console.log(...arguments);
    },
};

myFunc2.showArguments(
    "Avanti Palestra",
    "Full-Stack Developer",
    "react",
    "nodejs",
    "typescript"
);

let user = {
    name: "sarah barreto",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal () {
        console.log("Meu nome é", this.name, "Nominal Function");
    }
}