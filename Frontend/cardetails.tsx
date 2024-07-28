import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CarDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plusContainer}>
        <Text style={styles.plus}>+</Text>
      </View>
      <Image source={require('./assets/tesla.png')} style={styles.icon} />
      <Text style={styles.title}>Your Car Details</Text>
      <Text style={styles.label}>Make:</Text>
      <Text style={styles.value}>Tesla</Text>
      <Text style={styles.label}>Model:</Text>
      <Text style={styles.value}>Model Y</Text>
      <Text style={styles.label}>License Plate:</Text>
      <Text style={styles.value}>ABC-1234</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  plusContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  plus: {
    fontSize: 30,
    color: '#3498DB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  icon: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  value: {
    fontSize: 20,
    color: '#000',
    marginBottom: 15,
  },
});

export default CarDetailsScreen;