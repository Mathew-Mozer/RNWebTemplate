import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useSelector } from 'react-redux';

const TaskView = () => {
  const tasks = useSelector((state) => state.companies.tasks);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>Current Tasks</Text>
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {tasks.map((task) => (
          <View // Special animatable View
            style={styles.container}>
            <View>
              <Text>Picture</Text>
            </View>
            <Text>{task.name}</Text>
            <Text>{task.description}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8c3d4',
    borderColor: '#69717d',
    borderStyle: 'solid',
    borderWidth: 1,
    minWidth: 350,
    borderRadius: 5,
    margin: 2,
  },
});

export default TaskView;
