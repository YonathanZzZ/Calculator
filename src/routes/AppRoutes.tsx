import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from '../components/login/LoginPage.jsx';
import {useSelector} from "react-redux";
import MainPage from '../components/MainPage.jsx';
import Calculator from "../components/calculator/Calculator.jsx";
import History from "../components/History.jsx";
import {RootState} from "../redux/store.tsx";

const AppRoutes = () => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    return (
        <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Calculator'}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}>
                    <Route index element={<Calculator />} /> {/*index is the default nested route*/}
                    <Route path="history" element={<History/>} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;