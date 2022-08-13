import { Route, Routes } from 'react-router-dom';

import Landing from './layouts/landing/LandingLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import AdminLayout from './layouts/admin/AdminLayout';
import PageNotFound from './components/specific/pageNotFound/PageNotFound';
import ProtectedRouter from './components/specific/protectedRouter/ProtectedRouter';

import { adminRouter, authRouter } from './utils/router';
import Modal from './components/specific/modal/Modal';

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
        <Modal />
      </div>
    </>
  );
}

export default App;
