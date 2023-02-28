import { CronogramaEntity } from "../../domain/cronograma.entity";
import { CronogramaRepository } from "../../domain/cronograma.repository";
import pool from "../db/postgres";

export class postgresRepository implements CronogramaRepository {

    buscarCronograma(idCronograma: string): Promise<CronogramaEntity> {
        throw new Error("Method not implemented.");
    };

    public async registrarCronograma(cronogramaIN: CronogramaEntity): Promise<any> {
        const pgClient = await pool.connect();

        const { rows } =  await pgClient.query(`
            select 
                'abc123qwe456' idCronograma,
                '2023-01-01' fechaInicio,
                '2023-01-17' fechaVencimiento,
                2500.00 montoCuota,
                150.00 seguro,
                100.00  desgravamen
        `);

        return rows;
    }
}