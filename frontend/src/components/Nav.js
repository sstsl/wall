import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul style={{display: 'inline'}}>
      <Button style={{paddingLeft: 10, display: 'inline', float:'right' }} onClick={() => props.display_form('login')}>Login</Button>
      <Button style={{display: 'inline', float:'right'}} onClick={() => props.display_form('signup')}>Signup</Button>

    </ul>
  );

  const logged_in_nav = (
    <ul style={{display: 'inline'}}>
      <Button style={{display: 'inline', float:'right'}} onClick={props.handle_logout}>Logout</Button>
      <Button style={{display: 'inline', float:'left', padding: 10, margin: 10}} variant="contained" color="primary" onClick={() => props.display_form('post')}>Make Post</Button>
    </ul>
  );
  return <div style={{display: 'inline'}}>{props.logged_in ? logged_in_nav : logged_out_nav} <Button  style={{display: 'inline', float:'left', padding: 10, margin: 10 }} variant="contained" color="primary" onClick={() => props.display_form('wall')}>View Wall</Button></div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
