import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Navigation.module.scss';
import Hamburger from './Hamburger';
import NavLink from './NaviLink';

const Navigation = () => {
  console.log('test');

  const showMenu = useSelector((state) => state.navi.showMenu);

  const content = (
    <header className={styles.header}>
      <div className="logo">logo</div>
      <Hamburger />
      <nav className="navbar">
        <ul className={styles.primaryNavigation}>
          <li>
            <NavLink to="/">Link 1</NavLink>
          </li>
          <li>
            <NavLink to="/test">Link 2</NavLink>
          </li>
          <li>
            <NavLink to="/test2">Link 2</NavLink>
          </li>
        </ul>
      </nav>
      <div>{showMenu ? 'show' : 'hide'}</div>
    </header>
  );
  return content;
};

export default Navigation;
