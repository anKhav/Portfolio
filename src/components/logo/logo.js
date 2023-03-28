import React from 'react';
import {logo} from './logo.module.scss'
import {Link} from "gatsby";

const Logo = () => {
    return (
           <Link to='/'>
               <h1 className={logo}>
                   Anton Khavaldzhi
               </h1>
           </Link>
    );
};

export default Logo;