import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from '../routing';
import Home from './HomeComponent';

import PrivateRoute from './PrivateRoute';

const Main = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.uid) {
      history.push('/');
    }
  }, [user.uid, history]);

  const LoginUser = () => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: { uid: 8675309 },
    });
  };

  return (
    <View>
      <Text>SwQuity</Text>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/Login">
          <View>
            <Text>Login</Text>
            <Button title="Login" onPress={() => LoginUser()} />
          </View>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
