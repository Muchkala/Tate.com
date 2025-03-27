import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import "./Basket.scss"
import { DeleteOutline, ShoppingCart } from '@mui/icons-material';
import { Context } from '../../../../material-ui/src/hooks/Contexts';
import { Grid2 } from '@mui/material';

export default function Basket() {
    const [state, setState] = useState(false);

    const {state: state2, dispatch} = useContext(Context)

    console.log(state2)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return (
        <div >
            <Button onClick={toggleDrawer(true)}><ShoppingCart/></Button>
            <Drawer 
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                 {
                    state2?.basket?.length > 0 ? state2.basket.map(({ id, images, price, title, QTY }) => {
                return  <div className='basket' key={id}>
                            <Grid2 container spacing={0} sx={{width:'100%', color:'black', border:'1px solid gray'}}>
                                <Grid2 size={6}>
                                <img src={images} alt="" />
                                </Grid2>
                                <Grid2 size={6} sx={{display:'flex', flexDirection:'column', alignItems:'start', textAlign:'start', gap:'20px'}}>
                                <h5 style={{width:'100%'}}>{title.slice(0, 10)}</h5>
                                <div style={{width:'100%', display:'flex' ,gap:'10px'}} className="QTY">
                                    <h5 style={{fontFamily:'roboto', fontSize:'16px'}}>QTY</h5>
                                    <Button variant='outlined' onClick={() => dispatch({type: 'MINUS_QTY', payload: id})}>-</Button>
                                    <span>{QTY}</span>
                                    <Button variant='outlined' onClick={() => dispatch({type: 'PLUS_QTY', payload: id})}>+</Button>
                                </div>
                                <h4>price : {price * QTY} <span style={{fontFamily:'roboto'}}>$</span></h4>
                                <Button variant='outlined' style={{alignSelf:'end',marginRight:'10px'}} onClick={() => dispatch({type: 'REMOVE_BASKET', payload: id})}><DeleteOutline/></Button>
                                </Grid2>
                            </Grid2>
                        </div>
                    }) : <h2 style={{color:'white', background:'black'}}>Empty</h2>
                }

            </Drawer>

        </div>
    );
}