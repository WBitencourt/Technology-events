export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackReturnData {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<FeedbackReturnData>;
  getAll: () => Promise<Array<FeedbackReturnData>>;
}