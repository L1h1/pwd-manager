import { publicRoutes, authRoutes } from '../routes';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MANAGER_ROUTE } from '../utils/constants';
import { useContext } from 'react';
import { Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
  const {user} = useContext(Context);
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={Component} />
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={Component} />
      )}
      <Route path="*" element={<Navigate replace to={MANAGER_ROUTE} />} />
    </Routes>
  );
})

export default AppRouter;