import { Card, makeStyles, Typography, CardContent, Button, ButtonGroup, CardActions } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    img:{
        marginTop:135,
    },
    div:{
        width:1100,
        marginLeft:220,
        height:500,
    },
    card:{
        width:250,
        height:460,
        float:'left',
        marginLeft:20,
    },
}));

const prod = [
    
    {
        id:1,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:"Fortune",
        detail:'Dhara Mustard Oil, 1 Lt (Pouch) | धरा सरसों का तेल',
        price:'₹160.00 ₹127.80',
    },
    {
        id:2,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:"Fortune",
        detail:'Dhara Mustard Oil, 1 Lt (Pouch) | धरा सरसों का तेल',
        price:'₹160.00 ₹127.80',
    },
    {
        id:3,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:"Fortune",
        detail:'Dhara Mustard Oil, 1 Lt (Pouch) | धरा सरसों का तेल',
        price:'₹160.00 ₹127.80',
    },
];

function Body(props) {
    const classes = useStyles();
    const [count, setCount] = React.useState(1);
    return(
        <React.Fragment>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/04/MASALAS_BANNER.jpg" width='100%' className={classes.img} height='440' alt=""/>
            <div className={classes.div}>
                {prod.map((p,key) => (
                <Card key={key} className={classes.card}>
                    <img src={p.image} />
                    <CardContent align='center'>
                        <Typography >{p.title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{p.detail}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{p.price}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button type='button' size='small' onClick={() =>setCount(count - 1) } >-</Button>
                        <Typography>{count}</Typography>
                        <Button type='button' size='small' onClick={() =>setCount(count + 1) } >+</Button>
                    </CardActions>
                </Card>
                ))}
            </div>
{/* 
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/teacoffee3.png" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/pmoricepulse.jpg" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/Atta_maida1.png" width='100%' height='540' alt=""/>
            <img src="https://www.purneamall.com/wp-content/uploads/2019/07/banner-11.jpg" width='100%' height='540' alt=""/> */}
        </React.Fragment>
    )    
};
export default Body;