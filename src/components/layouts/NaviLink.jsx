import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShow } from '../../features/navi/naviSlice';

const NaviLink = ({ children, to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const show = useSelector((state) => state.navi.showMenu);

  console.log(show, 'show');

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const content = (
    <Link
      to={to}
      onClick={() => {
        dispatch(toggleShow());
      }}
      className={
        pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'
      }
    >
      <span aria-hidden="true">00</span>
      <span>{children}</span>
      <span>{show ? 'yes' : 'no'} show prop value</span>
    </Link>
  );
  return content;
};

NaviLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  show: PropTypes.bool,
};

export default NaviLink;
