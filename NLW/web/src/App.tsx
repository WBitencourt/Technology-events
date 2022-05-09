import { useState } from 'react'
import { Widget } from './components/Widget';
import { Toggle } from './components/Toggle';

export function App() {
  const [isThemeDark, setIsThemeDark] = useState(true)

  if(isThemeDark) {
    document.documentElement.classList.add('dark');
  }
  else {
    document.documentElement.classList.remove('dark');
  }
  
  return (
    <>
      <Toggle checked={isThemeDark} onChange={setIsThemeDark} />
      <Widget />
    </>
  )
}

export default App
