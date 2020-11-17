import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from '../routing';

function PrivateRoute({ component: Component, ...remainingProps }) {
  const UserData = useSelector(({ user }) => user.user);

  if (!UserData.uid) {
    return <Redirect to="/Login" />;
  }

  return (
    <Route
      {...remainingProps}
      render={(props) => <Component user={UserData} {...props} />}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
