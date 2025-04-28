import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { selectIsRefreshing } from "../../redux/auth/selectors";

import { Layout } from "../Layout/Layout"; 
import HomePage from "../../pages/HomePage/HomePage";
import css from './App.module.css';

const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div className={css.app}>
      <Suspense fallback={null}>
        <Routes>
          {/* Layout bileşenini kullanıyoruz ve her route'da children geçiyoruz */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route
            path="register"
            element={
              <RestrictedRoute 
                redirectTo="/contacts"
                component={<Layout><RegisterPage /></Layout>}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute 
                redirectTo="/contacts"
                component={<Layout><LoginPage /></Layout>}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute 
                redirectTo="/login"
                component={<Layout><ContactsPage /></Layout>}
              />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;