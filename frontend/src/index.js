import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserManager from './manager/UserManager';
import PasswordManager from './manager/PasswordManager';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserManager(),
    manager: new PasswordManager(),
  }}>
    <App />
  </Context.Provider>  
);


