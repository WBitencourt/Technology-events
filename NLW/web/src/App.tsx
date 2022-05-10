import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ThemeProvider } from './contexts/theme';

export function App() {
 
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
