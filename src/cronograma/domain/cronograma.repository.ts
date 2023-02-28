import { CronogramaEntity } from "./cronograma.entity";

export interface CronogramaRepository {
    buscarCronograma(idCronograma: string): Promise<CronogramaEntity>;
    registrarCronograma(cronograma: CronogramaEntity): Promise<CronogramaEntity | null>;
};