const aereasNacionais = ["Azul", "Gol", "Latam"];

const airCompanies = [
    ...aereasNacionais,
    "Delta",
    "United Airlines",
    "Emirates",
    "Qatar",
    "Tap",
];

console.log(airCompanies);

const [azul, voeGol, Latam, delta, ...internacionais] = airCompanies;

console.log(delta, "verificando a variavel delta");
console.log(internacionais, "verificando a variavel internacionais");

const user = {
    name: "Sarah Barreto",
    email: "sarahbarreto86@gmail.com",
    password: "123456"
}

const {password, ... data } = user;

console.log(data, "retornando dados da API");

const body = document.querySelector("body");
body.style.width = "100%"
body