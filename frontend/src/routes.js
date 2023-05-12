import Main from "./pages/Main";
import Manager from "./pages/Manager";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg"
import { LOGIN_ROUTE, MAIN_ROUTE, MANAGER_ROUTE, REGISTRATION_ROUTE } from "./utils/constants";

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Auth />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Reg />
  },
  {
    path: MANAGER_ROUTE,
    Component: <Manager />
  },
]