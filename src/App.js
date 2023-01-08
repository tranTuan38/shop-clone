import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoute, privateRoute } from '~/routes';
import DefaultLayout from '~/layouts';
import PrivateRoute from '~/components/PrivateRoute';
import { useStore } from '~/hooks';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [state, dispatch] = useStore();
    const isLogin = state.login;

    return (
        <Router>
            <div className="App">
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
                <ToastContainer hideProgressBar={true} className="toast-react-container" limit={5} />
            </div>
        </Router>
    );
}

export default App;
