import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul style={{paddingLeft: 0}}>
      <li onClick={() => props.display_form('login')}>Login</li>
      <li onClick={() => props.display_form('signup')}>Signup</li>
      <li onClick={() => props.display_form('wall')}>Wall</li>
    </ul>
  );

  const logged_in_nav = (
    <ul style={{paddingLeft: 0}}>
      <li onClick={props.handle_logout}>Logout</li>
      <li onClick={() => props.display_form('wall')}>Wall</li>
      <li onClick={() => props.display_form('post')}>Post</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
