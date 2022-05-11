import React, {createContext, useState, useEffect, useContext} from 'react';
import usePersistedState from '../utils/usePersistedState';
//import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextData {
  isThemeDark: boolean;
  setIsThemeDark: (data: boolean) => void;
}

//Define o formato/tipagem do contexto e nao o valor default. Ideal para typeScript
const AuthContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({children}: any) => {
  const [isThemeDark, setIsThemeDark] = usePersistedState<boolean>('themeDark', true)

  if(isThemeDark) {
    document.documentElement.classList.add('dark');
  }
  else {
    document.documentElement.classList.remove('dark');
  }
 
  return (
    <AuthContext.Provider
      value={{isThemeDark, setIsThemeDark}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(AuthContext);

  return context;
}
