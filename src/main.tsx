import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',  // Dark background color
      paper: '#1d1d1d',    // Paper background for cards, dialogs, etc.
    },
    text: {
      primary: '#ffffff',  // Primary text color for readability on dark backgrounds
      secondary: '#b0b0b0', // Secondary text color for less emphasized content
    },
  },
  components: {
    // Custom component styles if needed
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
