import Main from "./pages/Main";
import Manager from "./pages/Manager";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import { LOGIN_ROUTE, MAIN_ROUTE, MANAGER_ROUTE, REGISTRATION_ROUTE, CREATE_ROUTE, DETAIL_ROUTE } from "./utils/constants";

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />
  },
  {
    path: CREATE_ROUTE,
    Component: <Create />
  },
  {
    path: DETAIL_ROUTE + '/:id',
    Component: <Detail />
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