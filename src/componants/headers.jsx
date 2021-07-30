import { AppBar, makeStyles, Paper, Toolbar, Select, FormControl, InputLabel, MenuItem, InputBase, Typography, Divider, IconButton } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    app:{
        height:90,
    },
    tool:{
        marginTop:14,
        marginLeft: 210,
    },
    pap:{
        marginLeft:30,
        borderRadius:25,
        width:60,
        height:35,
    },
    form:{
        marginLeft:11,
        marginTop: -13,
    },
    pap1:{
        marginLeft:5,
        borderRadius:52,
        width:220,
        paddingLeft:10,
        backgroundColor: '#f5f5f5',
        height:35,
    },
    div:{
        color: 'rgba(102,102,102,0.85)',
    },
    fav:{
        marginLeft:2,
    },
    div1:{
        display: 'flex',
        '& > *':{
            marginLeft: theme.spacing(2),
        },
        marginLeft:80,
    },
}));

function Headers() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar color='inherit' className={classes.app}>
                <Toolbar className={classes.tool}>
                   <Link to='/'> <img src="https://www.purneamall.com/wp-content/uploads/2018/11/Transparent_2.png" width='265' alt=""/></Link>
                    <Paper className={classes.pap}>
                        <FormControl className={classes.form}>
                            <InputLabel id='sel'>All</InputLabel>
                            <Select id='sel'>
                                <MenuItem value='All'>All</MenuItem>
                                <MenuItem value='Item' >Item</MenuItem>
                                <MenuItem value='Potato' >Potato</MenuItem>
                                <MenuItem value='Onion' >Onion</MenuItem>
                                <MenuItem value='Oil' >Oil</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                    <Paper className={classes.pap1}>
                        <InputBase placeholder='Search Product...' />
                        <SearchIcon className={classes.search} />
                    </Paper>
                    <div className={classes.div1}>
                    <Typography className={classes.div}>WISHLIST</Typography>
                    <FavoriteIcon className={classes.div} />
                    <Divider orientation='vertical' flexItem />
                    <Typography className={classes.div}>LOGIN / REGISTER</Typography>
                    <Divider orientation='vertical' flexItem />
                    <Typography className={classes.div}>CART / ₹0.00</Typography>
                    <IconButton>
                     <LocalMallIcon className={classes.div} />
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
};
export default Headers;