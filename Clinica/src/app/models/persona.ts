export class Persona {

    constructor(
        _id = '', nombre = '', edad = 0, fechaNacimiento = '',
        nacionalidad = '', domicilio = '', telefono = 0){
            this._id = _id;
            this.nombre = nombre;
            this.edad = edad;
            this.fechaNacimiento = fechaNacimiento;
            this.nacionalidad = nacionalidad;
            this.domicilio = domicilio;
            this.telefono = telefono;
        }

    _id: string;
    nombre: string;
    edad: Number;
    fechaNacimiento: string;
    nacionalidad: string;
    domicilio: string;
    telefono: number;
}
