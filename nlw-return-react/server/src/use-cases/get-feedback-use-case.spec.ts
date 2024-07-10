//import { FeedbackReturnData } from '../repositories/feedbacks-repository';
import { GetFeedbackUseCase } from './get-feedback-use-case';

const createFeedbackSpy = jest.fn();
const getAllFeedbackSpy = jest.fn();

const getFeedback = new GetFeedbackUseCase (
  { 
    create: createFeedbackSpy, //async () => {const value = {}; return <FeedbackReturnData>value},
    getAll: getAllFeedbackSpy, //async () => {const value = {}; return <Array<FeedbackReturnData>>value},
  },
)

describe('Get Feedbacks', () => {
  it('should be able to get feedbacks', async () => {
    await expect(getFeedback.getAll()).resolves.not.toThrow();
    await expect(getAllFeedbackSpy).toHaveBeenCalled();
    await expect(createFeedbackSpy).not.toHaveBeenCalled();
  })
})