import { AppBar, Container, CssBaseline } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import ElevationScroll from '../../providers/navbarScroll';
import Basket from '../Basket/Basket';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import { menuLinkk } from '../../constants/data';

export default function Navbar() {
    return (
        <div className='navbar'>
            <CssBaseline />
            <ElevationScroll>
                <AppBar>
                    <Container maxWidth='xl'>
                        <Grid2 container sx={{ justifyContent: "space-between", alignItems: "center" }} spacing={2}>
                        <Grid2 size={{ xs: 12, md: 7 }} spacing={0} className='navLeft'>
                                <div className="navBars">
                                    <HorizontalSplitOutlinedIcon />  
                                </div>
                                <ul className="menuList">
                                    {
                                        menuLinkk.map(({ id, linkName, slug }) => (
                                            <li key={id}>
                                                <Link to={'/tajriba'}>{linkName}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Grid2>
                            <Grid2 xs="auto" size={{ md: 1 }}> 
                                <ul className='iconsGroup'>
                                    <li><Basket /></li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}
