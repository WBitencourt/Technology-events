import { api } from '../../lib/api';
import { useEffect, useState } from 'react';
import { Building } from '../Building'

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
    <div>
      <br />
      <p className='text-brand-500'>Página em desenvolvimento</p>
      <hr />
      <br />
      {Object.entries(feedbacks).map(([key, value]) => {
        return (
          <>
            <ul key={key} className="text-[#09090A] dark:text-white">
              <li>ID: {value.id}</li>
              <li>Tipo: {value.type}</li>
              <li>Comentário: {value.comment}</li>
              <li>Screenshot: {value.screenshot}</li>
            </ul>
            <hr />
            <br />
          </>

        )
      })}
    </div>
  );
}