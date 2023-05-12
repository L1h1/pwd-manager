import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserManager from './manager/UserManager';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserManager()
  }}>
    <App />
  </Context.Provider>  
);


