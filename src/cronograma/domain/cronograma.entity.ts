export interface CronogramaEntity {
    idCronograma: string,
    fechaInicio: Date,
    fechaVencimiento: Date,
    montoCuota: number,
    seguro: number,
    desgravamen: number
}