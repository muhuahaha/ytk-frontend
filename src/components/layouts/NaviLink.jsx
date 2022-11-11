import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

const NaviLink = ({ children, to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const content = (
    <Link
      to={to}
      onClick={() => {
        console.log('show');
      }}
      className={
        pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'
      }
    >
      <span aria-hidden="true">00</span>
      <span>{children}</span>
    </Link>
  );
  return content;
};

NaviLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default NaviLink;
