import React, { useState } from 'react'
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../../../shared/components/UIElements/BackDrop';

function MainNavigation(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = ()=>{
        setDrawerOpen(true)
    }

    const closeDrawer = ()=>{
        setDrawerOpen(false)
    }
    return (
        <React.Fragment>
            {drawerOpen && <BackDrop onClick = {closeDrawer}/>}
            {drawerOpen && (
                <SideDrawer>
                    <nav className='main-navigation__drawer-nav'>
                        <NavLinks />
                    </nav>
                </SideDrawer>
            )
            }
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'> Your places</Link>
                </h1>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;