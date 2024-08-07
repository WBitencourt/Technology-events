//import { FeedbackReturnData } from '../repositories/feedbacks-repository';
import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const getAllFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase (
  { 
    create: createFeedbackSpy, //async () => {const value = {}; return <FeedbackReturnData>value},
    getAll: getAllFeedbackSpy, //async () => {const value = {}; return <Array<FeedbackReturnData>>value},
  },
  { sendMail: sendMailSpy }, //async () => {} },
)

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type:  'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,vrregerge',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(getAllFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type:  '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,vrregerge',
    })).rejects.toThrow();
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type:  'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,vrregerge',
    })).rejects.toThrow();
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type:  'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  })
})
