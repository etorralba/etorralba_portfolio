import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the change here
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                {/* Common components like header and footer can be included here */}
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<Home />} /> {/* Use "element" prop instead of "component" */}
                </Routes>
                {/* Common components like footer can be included here */}
            </div>
        </Router>
    );
}

export default App;
