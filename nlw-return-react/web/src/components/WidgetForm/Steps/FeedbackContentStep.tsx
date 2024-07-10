import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ArrowLeft } from 'phosphor-react';
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from '../../../lib/api';
import { Loading } from '../../../components/Loading';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep (
  { onFeedbackSent, 
    feedbackType, 
    onFeedbackRestartRequested }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string>('');
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    console.log({
      type: feedbackType,
      screenshot,
      comment,
    });

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });

    console.log('enviado');

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button 
          type="button" 
          className="top-5 left-5 absolute text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-100"
          onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>

        <span className="text-zinc-800 dark:text-zinc-100 text-xl leading-6 flex items-center gap-2">
          <img 
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source} 
            alt={feedbackTypeInfo.image.alt} 
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea 
          className="min-w-[340px] w-full min-h-[112px] text-sm placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..." 
          onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot} 
          />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            { isSendingFeedback ? <Loading /> : 'Enviar Feedback' }
          </button>
        </footer>
      </form>
    </>
  );
}