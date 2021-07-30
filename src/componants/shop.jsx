import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    img:{
        marginTop:135,
    },
}));

function Body() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/banner-11.jpg" width='100%' className={classes.img} height='440' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/Atta_maida1.png" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/pmoricepulse.jpg" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/teacoffee3.png" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/04/MASALAS_BANNER.jpg" width='100%' height='540' alt=""/>
        </React.Fragment>
    )    
};
export default Body;