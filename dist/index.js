"use strict";
let mensaje = "Hola Mundo";
mensaje = "Oscar TG";
mensaje = "bye Oscar";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let miVariable;
miVariable = "Oscar TG";
miVariable = 42;
function chanchitoFeliz(config) {
    return config;
}
let animales = ["Chanchito", "Feliz", "Felipe"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ["Chanchito feliz", "Chanchito feliz"]];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Meidana"] = "m";
    Talla["Grande"] = "g";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "Oscar TG",
    talla: Talla.Meidana,
    direccion: {
        numero: 219,
        calle: "Nogal",
        pais: "mx",
    },
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return "Puedes ingresar";
    return "No puedes ingresar";
};
function validaEdad(edad, msg = "Oscar TG") {
    if (edad > 17)
        return `Puedes ingresar ${msg}`;
    return "No puedes pasar";
}
validaEdad(16, "Oliver TA");
function erroUsuario() {
    throw new Error("Error de usuario");
}
//# sourceMappingURL=index.js.map