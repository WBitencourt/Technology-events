import { api } from '../../lib/api';
import { useEffect, useState } from 'react';
//import { Building } from '../Building'
import { Widget } from '../../components/Widget';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { Camera, ChatTeardropDots, Key, Copy } from 'phosphor-react';

interface Feedbacks {
  id: string;
  type: string;
  comment: string;
  screenshot: string;
}

export function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedbacks>({} as Feedbacks);

  useEffect(() => {
    async function getFeedBacks() {
      const response = await api.get('/feedbacks')
      const data = await response.data.data;
      setFeedbacks(data);

      console.log(data);
    }

    getFeedBacks();
  }, [])

  return (
    <div className="flex flex-wrap justify-evenly text-sm ">
      {Object.entries(feedbacks).map(([key, value]) => {
        return (
          <div className="p-3 min-w-[380px] max-w-auto h-auto my-3 mx-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:border-brand-500 hover:dark:border-brand-500 border-2 border-zinc-300 dark:border-zinc-600 flex transition-colors">
            <ul key={key} className="w-full text-zinc-900 dark:text-zinc-300">
              <li className="flex my-1 items-center">
                <Key className="mr-2 text-brand-500" /> {value.id}
              </li>
              <li className="flex my-1 items-center">
                <img 
                  className="w-4 h-4 mr-2" 
                  src={value.type === 'BUG' ? bugImageUrl : value.type === 'IDEA' ? ideaImageUrl : thoughtImageUrl} />
                  {value.type}
              </li>
              <li className="flex my-1 items-center">
                <ChatTeardropDots className="mr-2 text-brand-500" /> {value.comment}
              </li>
              <li className="flex my-1 w-full justify-between items-center">
                <span className="flex items-center">
                  <Camera className="mr-2 text-brand-500" /> 
                  {value.screenshot ? String(value.screenshot).substr(0, 35) + '...' : ""}
                </span>
                <button onClick={() => navigator.clipboard.writeText(value.screenshot)}>
                  {
                    value.screenshot ? 
                    <Copy className="mr-2 text-zinc-900 dark:text-white" />  
                    : 
                    null
                  }            
                </button>
              </li>
            </ul>
          </div>

        )
      })}
      <Widget />
    </div>
    
  );
}