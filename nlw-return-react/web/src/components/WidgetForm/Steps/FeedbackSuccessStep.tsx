import { CloseButton } from "../../CloseButton";
import successImageUrl from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRequested: () => void;
}

export function FeedbackSuccessStep ({
  onFeedbackRequested
}:FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Imagem de sucesso" />

        <span className="text-zinc-800 dark:text-zinc-100 text-xl mt-2">Agradecemos o feedback</span>

        <button
          onClick={onFeedbackRequested}
          className="py-2 px-6 mt-6 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-200 hover:dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}