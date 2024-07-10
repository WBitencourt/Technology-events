import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { GetFeedbackUseCase } from './use-cases/get-feedback-use-case';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router();

routes.get('/', (req, res) => {
  return res.status(200).send('HTTP server running!');
});

routes.get('/feedbacks', async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const getFeedbackUseCase = new GetFeedbackUseCase(
    prismaFeedbacksRepository,
  );

  const feedback = await getFeedbackUseCase.getAll();

  return res.status(200).json({data: feedback});
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
    );

  const feedback = await submitFeedbackUseCase.execute({
    type, 
    comment, 
    screenshot,
  })
  
  return res.status(201).json({data: feedback});
});