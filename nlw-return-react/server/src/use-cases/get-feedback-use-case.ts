import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class GetFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) {}

  async getAll() {
    const feedback = await this.feedbacksRepository.getAll();

    return feedback;
  }
}