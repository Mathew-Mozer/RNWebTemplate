import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const CompanyThumbnail = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text>{company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8c3d4',
    borderColor: '#69717d',
    borderStyle: 'solid',
    borderWidth: 1,
    height: Platform.OS === 'web' ? 200 : 100,
    width: Platform.OS === 'web' ? 200 : 100,
    borderRadius: 5,
    margin: 2,
  },
});

export default CompanyThumbnail;
