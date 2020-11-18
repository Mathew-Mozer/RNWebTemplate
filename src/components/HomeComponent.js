import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CompanyThumbnail from './CompanyThumbnailComponent';
import TaskView from './TaskViewComponent';

const HomeComponent = () => {
  const companies = useSelector((state) => state.companies.companies);

  return (
    <View>
      <Text>Contributor View</Text>
      <View style={styles.container}>
        <View style={styles.currentTasks}>
          <TaskView />
        </View>
        <ScrollView
          style={styles.currentCompanies}
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
          }}>
          {companies.map((company) => (
            <CompanyThumbnail company={company} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  currentTasks: { height: 300 },
  currentCompanies: {},
});

export default HomeComponent;
