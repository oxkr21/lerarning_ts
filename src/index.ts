let mensaje: string = "Hola Mundo";

mensaje = "Oscar TG";

mensaje = "bye Oscar";

console.log(mensaje);

console.log(typeof []);

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

let miVariable;
miVariable = "Oscar TG";
miVariable = 42;

function chanchitoFeliz(config: any) {
  return config;
}

let animales: string[] = ["Chanchito", "Feliz", "Felipe"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map(x => x.) //El autocompleado sugiere metodos del tipo de dato

//Tupla
let tupla: [number, string[]] = [1, ["Chanchito feliz", "Chanchito feliz"]];

//ENUM
enum Talla {
  Chica = "s",
  Meidana = "m",
  Grande = "g",
  ExtraGrande = "xl",
}

const variable1 = Talla.Grande;

console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Sucess,
  Error,
}

const estado = LoadingState.Sucess;

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "Oscar TG",
  talla: Talla.Meidana,
  direccion: {
    numero: 219,
    calle: "Nogal",
    pais: "mx",
  },
};

const arr: Persona[] = [];

//FUNCIONES
const fn: (a: number) => string = (edad: number) => {
  if (edad > 17) return "Puedes ingresar";
  return "No puedes ingresar";
};

function validaEdad(edad: number, msg: string = "Oscar TG"): string {
  if (edad > 17) return `Puedes ingresar ${msg}`;

  return "No puedes pasar";
}

validaEdad(16, "Oliver TA");

function erroUsuario(): never {
  throw new Error("Error de usuario");
}
