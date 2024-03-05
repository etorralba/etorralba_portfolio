import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <div className='h-screen'>
                <Navbar />
                <div className="flex justify-center h-full">
                    <div className="w-4/5">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
