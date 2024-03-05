import React from 'react';
import Bio from '../components/Bio';
import Projects from "../components/Projects";

const Home: React.FC = () => {
    return (
    <div className="h-full">
        <Bio />
        <Projects />
    </div>
    );
}

export default Home;
