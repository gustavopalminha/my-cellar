import React from "react";
import classes from './Header.module.css';

const Header : React.FC = () => {
    return (
        <h1 className={classes.header}>My Cellar</h1>
    );
};

export default Header;