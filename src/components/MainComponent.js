import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route, Switch, useHistory } from '../routing';

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

  console.log('app', history);
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

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Main;
