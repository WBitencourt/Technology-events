import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../../Loading';

interface ScreenshotButtonProps {
  screenshot: string;
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    console.log(base64image);
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook('')}
        style={{
          backgroundImage: `url(${screenshot})`,
          //backgroundPosition: 'right bottom',
          //backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md border-transparent hover:bg-zinc-200 hover:dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-800 dark:text-zinc-100" />}
    </button>
  );
}