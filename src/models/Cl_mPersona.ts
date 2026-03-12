export default class Cl_mPersona {
    private _nombre: string;
    private _edad: number;

    constructor({ nombre, edad }: { nombre: string; edad: number }) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(): string {
        return this._nombre;
    }

    get edad(): number {
        return this._edad;
    }
}