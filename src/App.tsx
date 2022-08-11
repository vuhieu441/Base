import './App.css';
import { Route, Routes } from 'react-router-dom';

import Landing from './layouts/landing/LandingLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import PageNotFound from './components/specific/pageNotFound/PageNotFound';
import { adminRouter, authRouter } from './utils/router';
import AdminLayout from './layouts/admin/AdminLayout';
import ProtectedRouter from './components/specific/protectedRouter/ProtectedRouter';
import Loading from './components/specific/loading/Loading';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='auth' element={<AuthLayout />}>
            {authRouter.map((item, idx) => {
              const Page = item.component;
              return <Route path={item.path} index={item.index ?? false} key={idx} element={<Page />}></Route>;
            })}
          </Route>
          <Route path='admin' element={<ProtectedRouter Component={AdminLayout} />}>
            {adminRouter.map((item, idx) => {
              const Page = item.component || '';
              return (
                <Route path={item.path} key={idx} element={<Page />}>
                  {item.children &&
                    item.children.length > 0 &&
                    item.children.map((childRoute, index) => {
                      const ChildComponent = childRoute.component;
                      return (
                        <Route
                          key={index}
                          path={childRoute.path}
                          index={childRoute.index ?? false}
                          element={<ChildComponent />}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Loading />
    </>
  );
}

export default App;
