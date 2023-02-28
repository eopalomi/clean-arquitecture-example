import {Router} from 'express';
import { CronogramaUseCase } from '../../aplication/cronograma.usecase';
import { CronogramaController } from '../controller/cronograma.controller';
import { postgresRepository } from '../repository/postgres.repository';

const routes = Router();

// REPOSITORIO
const cronogramaRepo = new postgresRepository();

// CASO DE USO
const cronogramaUsecase = new CronogramaUseCase(cronogramaRepo)

// CONTROLLER
const cronogramaController = new CronogramaController(cronogramaUsecase);

//ENDPOINTS
routes.post('/cronograma', cronogramaController.registController);

export default routes;