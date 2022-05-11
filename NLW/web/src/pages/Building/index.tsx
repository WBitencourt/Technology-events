import { Widget } from '../../components/Widget';
import { NavLink } from 'react-router-dom';

import bricklayerUrl from '../../assets/bricklayer.svg';

interface BuildingProps {
  namePage: string;
}

export function Building({namePage}: BuildingProps) {
  return (
    <>
      <div className="bg-white dark:bg-[#09090A] flex flex-col items-center justify-center h-[90vh]">
        <img src={bricklayerUrl} className="h-20 md:h-28 m-10 px-10" alt="Logo de um construtor" /> 
        <p className="text-[#09090A] dark:text-white font-light text-sm sm:text-2xl md:text-3xl m-4 px-10">
          Olá, a página de {namePage} está em construção.
        </p>
        <p className="text-[#09090A] dark:text-white font-light text-base sm:text-2xl md:text-3xl m-4 px-10">
          Por favor, acesse a área de <NavLink to='/feedbacks' className="text-brand-500 underline underline-offset-2 cursor-pointer">feedbacks.</NavLink>
        </p>
        <p className="text-[#09090A] dark:text-white font-light text-base sm:text-2xl md:text-3xl m-4 px-10">
          Obrigado!!
        </p>
      </div>
      <Widget />
    </>
  );
}