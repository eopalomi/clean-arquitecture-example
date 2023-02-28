import { Request, Response } from 'express';
import { CronogramaUseCase } from '../../aplication/cronograma.usecase';

export class CronogramaController {
    constructor(private cronogramaUseCase: CronogramaUseCase) {
        this.registController = this.registController.bind(this);
    }

    public async registController({ body }: Request, res: Response) {
        const cronograma = await this.cronogramaUseCase.registrarCronograma(body);

        res.send(cronograma);
    }
}