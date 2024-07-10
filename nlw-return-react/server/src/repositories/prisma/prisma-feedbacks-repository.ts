import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository, FeedbackReturnData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });

    return <FeedbackReturnData>feedback;
  }

  async getAll() {
    const feedback = await prisma.feedback.findMany();

    return <Array<FeedbackReturnData>>feedback;
  }
}