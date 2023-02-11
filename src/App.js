import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoute, privateRoute } from '~/routes';
import DefaultLayout, { MobileLayout } from '~/layouts';
import PrivateRoute from '~/components/PrivateRoute';
import { useStore } from '~/hooks';
import ScrollToTop from './components/ScrollToTop';
import MobileScrollTop from './components/MobileScrollTop';
import { ToastContainer } from 'react-toastify';
import { useViewport } from '~/hooks';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [state, dispatch] = useStore();
    // const viewPort = useViewport();
    const isLogin = state.login;

    // console.log(viewPort);
    // console.log(456);

    // const isMobile = viewPort.width <= 1024;

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Routes>
                    {publishRoute.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        // if (viewPort) Layout = MobileLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoute.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (isLogin) {
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                        } else {
                            Layout = route.layoutNotLogin;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <PrivateRoute isLogin={isLogin}>
                                            <Page />
                                        </PrivateRoute>
                                    </Layout>
                                }
                            />
                        );
                    })}
                    <Route
                        path="*"
                        element={
                            <div>
                                <h1>404</h1>
                            </div>
                        }
                    ></Route>
                </Routes>
                <MobileScrollTop />
            </Router>
            <ToastContainer
                hideProgressBar={true}
                className="toast-react-container"
                limit={5}
                autoClose={3000}
                pauseOnFocusLoss={false}
            />
        </div>
    );
}

export default App;
