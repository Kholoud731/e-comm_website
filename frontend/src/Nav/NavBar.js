import React from 'react';
import styles from './logo.module.css'; 
import Logo from './Logo'
import Catergory from './Catergory';

class NavBar extends React.Component {
    render() { 
        return (  
        <div className={styles.navBar}>
            <Catergory/>
            <Logo/>

        </div>);
    }
}
 
export default NavBar;