import { AppBar, Button, makeStyles, Toolbar, Divider } from '@material-ui/core';
import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CallIcon from '@material-ui/icons/Call';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom';


const styles = makeStyles((theme) =>({
    app1:{
        marginTop:91,
        backgroundColor:'#143c70',
        height:43,
    },
    btn1:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:12,
    },
    btn3:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
    },
    div1:{
        marginLeft:100,
    },
    tool:{
        marginTop:0,
        marginLeft: 197,
    },
    loop:{
        display: 'flex',
        '& > *':{
            marginLeft: theme.spacing(2),
        },
    },
    loop1:{
        display: 'flex',
        '& > *':{
            marginLeft: theme.spacing(2),
        },
        marginLeft:150,
    },
    divider:{
        backgroundColor:"#e8eaf6 ",
        height: 20,
        marginTop: -10,
    },
    divider1:{
        backgroundColor:"#e8eaf6 ",
        height: 20,
        marginLeft:10,
        marginTop: -15,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

function Appbar(props) {
    const classes = styles();

    return(
        HideOnScroll.propTypes = {
            children: PropTypes.element.isRequired,
            /**
             * Injected by the documentation to work in an iframe.
             * You won't need it on your project.
             */
            window: PropTypes.func,
          },
          
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar className={classes.app1}>
                    <Toolbar className={classes.tool}>
                        <div className={classes.loop}>
                        <Link to='/' ><Button className={classes.btn1}>HOME</Button></Link>
                        <Divider orientation='vertical' className={classes.divider} flexItem />
                        <Link to='/shops'><Button className={classes.btn1}>SHOP</Button></Link>
                        <Divider orientation='vertical' className={classes.divider} flexItem />
                        <Button className={classes.btn1}>MY ACCOUNT</Button>
                        <Divider orientation='vertical' className={classes.divider} flexItem />
                        <Button className={classes.btn1}>TRACK YOUR ORDER</Button>
                        <Divider orientation='vertical' className={classes.divider} flexItem />
                        <Button className={classes.btn1}>CONTACT US</Button>
                        <Divider orientation='vertical' className={classes.divider} flexItem />
                        <Button className={classes.btn1}>CHECLOUT</Button>
                        </div>
                        <div className={classes.loop1}>
                        <Button className={classes.btn3}><MailOutlineIcon />EMAIL</Button>
                        <Divider orientation='vertical' className={classes.divider1} flexItem />
                        <Button className={classes.btn3}><AccessTimeIcon /> 09:00-21:00</Button>
                        <Divider orientation='vertical' className={classes.divider1} flexItem />
                        <Button className={classes.btn3}><CallIcon /> +91-8228980284</Button>
                        </div>
                    </Toolbar>
                </AppBar>
                </HideOnScroll>
        </React.Fragment>
    )
};
export default Appbar;