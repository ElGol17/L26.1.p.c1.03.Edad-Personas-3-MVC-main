export interface I_vGrupo {
    get nombre(): string;
    get edad(): number;
    onProcesar(callback: () => void): void;
    reportar(cantidad: number, promedio: number, edadMayor: number, nombreMayor: string, edadMenor: number, nombreMenor: string, mayores18?: number, menores18?: number): void;
    reportarListado?(personas: {
        nombre: string;
        edad: number;
    }[]): void;
}
//# sourceMappingURL=I_vGrupo.d.ts.map