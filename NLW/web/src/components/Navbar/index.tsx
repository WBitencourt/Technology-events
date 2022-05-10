import nlwReturnLogo from '../../assets/logo-nlw-return.svg';
import rocketseatLogo from '../../assets/logo-rocketseat.svg';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../CustomLink';
import { useTheme } from '../../contexts/theme';
import { Toggle } from '../Toggle';

export function Navbar() {
  const {isThemeDark, setIsThemeDark} = useTheme();

  return (
    <>
      <nav className="bg-[#09090A] border-gray-800 border-b-[0.01rem] px-2 sm:px-4 py-5 h-20 rounded">
        <div className="justify-between items-center hidden lg:flex">   
          <img src={nlwReturnLogo} className="h-auto pl-3" alt="Logo NLW return" /> 
          <div>
            <ul className="lg:flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
              <li>
                <CustomLink to='/'>Vídeos</CustomLink>
              </li>
              <li>
                <CustomLink to='/desafios'>Desafios</CustomLink>
              </li>
              <li>
                <CustomLink to='/cronograma'>Cronograma</CustomLink>
              </li>
              <li>
                <CustomLink to='/feedbacks'>Feedbacks</CustomLink>
              </li>
              <li>
                <Toggle checked={isThemeDark} onChange={setIsThemeDark} />
              </li>
            </ul>
          </div>
          <img src={rocketseatLogo} className="h-7 pr-3" alt="Logo Rocketseat" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}