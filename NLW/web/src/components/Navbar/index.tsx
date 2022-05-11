import nlwReturnLogo from '../../assets/logo-nlw-return.svg';
import rocketseatLogo from '../../assets/logo-rocketseat.svg';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../CustomLink';
import { useTheme } from '../../contexts/theme';
import { Toggle } from '../Toggle';
import './styles.css'
import { useState } from 'react';

export function Navbar() {
  const {isThemeDark, setIsThemeDark} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sizeFontDOM, setSizeFontDOM] = useState(16);

  document.documentElement.setAttribute('style', `font-size: ${sizeFontDOM}px`);

  const isOn = isMenuOpen ? "on" : "off";

  function upPixelDOM()
  {
    document.documentElement.removeAttribute('style');

    setSizeFontDOM(sizeFontDOM + 1);

    console.log(sizeFontDOM);    
  } 

  function downPixelDOM()
  {
    document.documentElement.removeAttribute('style');

    setSizeFontDOM(sizeFontDOM - 1);

    console.log(sizeFontDOM);    
  } 

  return (
    <>
      <nav className="bg-[#09090A] border-gray-800 border-b-[0.01rem] px-2 sm:px-4 py-5 h-20 rounded flex flex-row justify-between">
        <img src={nlwReturnLogo} className="h-auto pl-3 z-20" alt="Logo NLW return" /> 

        <div className={`menu-toggle ${isOn}`} />
        
        <ul className={`${isOn} lg:flex flex-col lg:flex-row mt-20 lg:mt-0 z-20 items-center justify-center`}>
          <li className="m-4 lg:m-0">
            <CustomLink 
              onClick={() => setIsMenuOpen(false)} 
              to='/'>
              Vídeos
            </CustomLink>
          </li>
          <li className="m-4 lg:m-0">
            <CustomLink 
              onClick={() => setIsMenuOpen(false)} 
              to='/desafios'>
              Desafios
            </CustomLink>
          </li>
          <li className="m-4 lg:m-0">
            <CustomLink 
              onClick={() => setIsMenuOpen(false)} 
              to='/cronograma'>
              Cronograma
            </CustomLink>
          </li>
          <li className="m-4 lg:m-0">
            <CustomLink 
              onClick={() => setIsMenuOpen(false)} 
              to='/feedbacks'>
              Feedbacks
            </CustomLink>
          </li>
          <li className="m-4 lg:m-0 hidden lg:flex">
            |
          </li>
          <li className="m-4 lg:m-0 flex items-center justify-center text-[#09090A] dark:text-[#a8a8b3] lg:text-[#a8a8b3]">
            <button className="ml-5 mr-2 font-bold" onClick={upPixelDOM}>A+</button>
            <button className="ml-2 mr-5 font-bold" onClick={downPixelDOM}>A-</button>
          </li>
          <li className="m-4 lg:m-0 flex items-center justify-center">
            <Toggle checked={isThemeDark} onChange={setIsThemeDark} />
          </li>
        </ul>

        <img src={rocketseatLogo} className="h-7 pr-3 hidden lg:flex" alt="Logo Rocketseat" />

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="space-y-2 mr-4 lg:hidden z-20">
          <div className="w-8 h-0.5 bg-brand-500"></div>
          <div className="w-8 h-0.5 bg-brand-500"></div>
          <div className="w-8 h-0.5 bg-brand-500"></div>
        </button>
      </nav>
      <Outlet />
    </>
  );
}