import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ResetStyle from './styles/ResetStyle.jsx';
import { GlobalStyle } from './styles/GlobalStyle.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Profiler>
    <ThemeProvider>
      <GlobalStyle />
      <ResetStyle />
      <App />
      <ToastContainer
      style={{ zIndex: 9999 }} // Garante que ele fique acima de outros elementos
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
  />
    </ThemeProvider>
  </React.Profiler>,
);