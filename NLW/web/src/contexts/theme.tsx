import React, {createContext, useState, useEffect, useContext} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextData {
  isThemeDark: boolean;
  setIsThemeDark: (data: boolean) => void;
}

//Define o formato/tipagem do contexto e nao o valor default. Ideal para typeScript
const AuthContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({children}: any) => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   async function loadStoragedData() {
  //     const storageUser = await AsyncStorage.getItem('@RNAuth:user');
  //     const storageToken = await AsyncStorage.getItem('@RNAuth:token');

  //       setUser(JSON.parse(storageUser));
  //     }

  //     setLoading(false);
  //   }

  //   loadStoragedData();
  // }, []);

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
