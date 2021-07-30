import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <React.Fragment>
            <h1>this is header</h1>
            <Link to='/content'>Go at content </Link>
        </React.Fragment>
    )
};