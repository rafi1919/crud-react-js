import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthGuardMiddleware from '../Domain/middlewere/Authguard.middleware.jsx';
import CounterPage from '../Pages/CounterPage';
import CrudPage from '../Pages/CrudPage';
import LoginPage from '../Pages/LoginPage';
import MainLayout from '../Layout/main.layout.jsx';

const App = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage setIsLogin={setIsLogin} />} />
                <Route element={<AuthGuardMiddleware isLogin={isLogin} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/crud" element={<CrudPage />} />
                        <Route path="/counter" element={<CounterPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
