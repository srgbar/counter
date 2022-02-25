import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/counterV1" className={s.route}>Counter Vers.1</NavLink>
            </div>
            <div>
                <NavLink to="/counterV2" className={s.route}>Counter Vers.2</NavLink>
            </div>
        </div>
    )

}