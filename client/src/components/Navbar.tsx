import React from 'react';
//@ts-ignore
import {ReactComponent as Logo} from '../assets/logo.svg';
import Menu from './Menu';
const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-50 py-2">
            <div className="mx-5 flex items-center justify-between">
                <div ><Logo className="h-8" /></div>
                <div>etorralba</div>
                <div><Menu/></div>
            </div>
        </nav>
    );
}

export default Navbar;