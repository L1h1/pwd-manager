import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import { useContext} from "react";
import { Context } from "./index";
import { MAIN_ROUTE } from "./utils/constants";

const App = observer(() => {
  const {user} = useContext(Context);
  if(localStorage.getItem('token')){
    user.setUser(true);
    user.setIsAuth(true);
  }
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
