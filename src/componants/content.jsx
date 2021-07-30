import { Typography } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Content() {
    return(
        <React.Fragment>
            <Typography variant='h3'>This is contant</Typography>
            <Link to='/'>gp at home</Link>
        </React.Fragment>
    )
};