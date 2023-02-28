import { CronogramaEntity } from "./cronograma.entity";

export class Cronograma implements CronogramaEntity {
    idCronograma!: string;
    fechaInicio!: Date;
    fechaVencimiento!: Date;
    montoCuota!: number;
    seguro!: number;
    desgravamen!: number;

    constructor(
        { idCronograma, fechaInicio, fechaVencimiento, montoCuota, seguro, desgravamen }: { idCronograma: string, fechaInicio: Date, fechaVencimiento: Date, montoCuota: number, seguro: number, desgravamen: number }
    ) {
        this.idCronograma = idCronograma;
        this.fechaInicio = fechaInicio;
        this.fechaVencimiento = fechaVencimiento;
        this.montoCuota = montoCuota;
        this.seguro = seguro;
        this.desgravamen = desgravamen;
    }
}