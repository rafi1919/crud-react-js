import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from '../Pages/CounterPage';
import CrudPage from '../Pages/CrudPage';

import MainLayout from '../Layout/main.layout.jsx';
const App =()=> {


    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<CounterPage/>} />
                    <Route path="/crud" element={<CrudPage/>} />

                </Route>
                
            </Routes>
        </Router>
    )
};
export default App