/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleShow } from '../../features/navi/naviSlice';

/**
 * Header Component should hold the menu trigger button.
 * onClick of this button we need to show or hide the sidebar navigation
 * The Menu Toggle state is maintained in the App Component.
 */
const Header = (props) => {
  const { menuState, setMenuState } = props;
  const dispatch = useDispatch();

  return (
    <header className="site-header">
      <div className="brand-icon">
        <Link to="/">
          <div className="icon">
            <i className="fab fa-react" />
          </div>
          <span>FrontendFunn</span>
        </Link>
      </div>
      <div>
        <button
          type="button"
          className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
          onClick={() => setMenuState(dispatch(toggleShow()))}
        >
          <span />
          Menü Knopf
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
export default Header;
