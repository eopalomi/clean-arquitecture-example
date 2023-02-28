import { Cronograma } from "../domain/cronograma";
import { CronogramaRepository } from "../domain/cronograma.repository";

export class CronogramaUseCase {
    constructor(private readonly cronogramaRepository: CronogramaRepository) { }

    public registrarCronograma = ({
        idCronograma,
        fechaInicio,
        fechaVencimiento,
        montoCuota,
        seguro,
        desgravamen
    }: {
        idCronograma: string,
        fechaInicio: Date,
        fechaVencimiento: Date,
        montoCuota: number,
        seguro: number,
        desgravamen: number
    }) => {
        const newCronograma = new Cronograma({
            idCronograma,
            fechaInicio,
            fechaVencimiento,
            montoCuota,
            seguro,
            desgravamen
        });

        const cronogramaCreado = this.cronogramaRepository.registrarCronograma(newCronograma);

        return cronogramaCreado;
    }



}