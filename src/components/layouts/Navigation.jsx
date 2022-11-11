import React from 'react';
import styles from './Navigation.module.scss';
import Hamburger from './Hamburger';
import NavLink from './NaviLink';

const Navigation = () => {
  console.log('test');
  const content = (
    <header className={styles.header}>
      <div className="logo">logo</div>
      <Hamburger />
      <nav className="navbar">
        <ul className={styles.primary_navigation}>
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
    </header>
  );
  return content;
};

export default Navigation;
