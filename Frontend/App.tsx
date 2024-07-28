import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, ScrollView, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Table, Row } from 'react-native-table-component';
import CarDetailsScreen from './cardetails';

type RootStackParamList = {
  Home: undefined;
  CarDetails: undefined;

};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface TimeInputProps {
  value: string;
  setValue: (text: string) => void;
}

const Stack = createStackNavigator<RootStackParamList>();

const TimeInput: React.FC<TimeInputProps> = ({ value, setValue }) => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} value={value} onChangeText={setValue} />
  </View>
);

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [vacationMode, setVacationMode] = useState(false);

  const [mondayStartTime, setMondayStartTime] = useState('02:00');
  const [mondayEndTime, setMondayEndTime] = useState('06:00');
  const [tuesdayStartTime, setTuesdayStartTime] = useState('02:00');
  const [tuesdayEndTime, setTuesdayEndTime] = useState('06:00');
  const [wednesdayStartTime, setWednesdayStartTime] = useState('02:00');
  const [wednesdayEndTime, setWednesdayEndTime] = useState('06:00');
  const [thursdayStartTime, setThursdayStartTime] = useState('02:00');
  const [thursdayEndTime, setThursdayEndTime] = useState('06:00');
  const [fridayStartTime, setFridayStartTime] = useState('03:00');
  const [fridayEndTime, setFridayEndTime] = useState('09:00');
  const [saturdayStartTime, setSaturdayStartTime] = useState('04:00');
  const [saturdayEndTime, setSaturdayEndTime] = useState('09:00');
  const [sundayStartTime, setSundayStartTime] = useState('04:00');
  const [sundayEndTime, setSundayEndTime] = useState('09:00');

  const tableHead = ['Day', 'Start Time', 'End Time'];
  const tableData = [
    ['Monday', <TimeInput value={mondayStartTime} setValue={setMondayStartTime} />, <TimeInput value={mondayEndTime} setValue={setMondayEndTime} />],
    ['Tuesday', <TimeInput value={tuesdayStartTime} setValue={setTuesdayStartTime} />, <TimeInput value={tuesdayEndTime} setValue={setTuesdayEndTime} />],
    ['Wednesday', <TimeInput value={wednesdayStartTime} setValue={setWednesdayStartTime} />, <TimeInput value={wednesdayEndTime} setValue={setWednesdayEndTime} />],
    ['Thursday', <TimeInput value={thursdayStartTime} setValue={setThursdayStartTime} />, <TimeInput value={thursdayEndTime} setValue={setThursdayEndTime} />],
    ['Friday', <TimeInput value={fridayStartTime} setValue={setFridayStartTime} />, <TimeInput value={fridayEndTime} setValue={setFridayEndTime} />],
    ['Saturday', <TimeInput value={saturdayStartTime} setValue={setSaturdayStartTime} />, <TimeInput value={saturdayEndTime} setValue={setSaturdayEndTime} />],
    ['Sunday', <TimeInput value={sundayStartTime} setValue={setSundayStartTime} />, <TimeInput value={sundayEndTime} setValue={setSundayEndTime} />],
  ];

  return (
    <ImageBackground source={require('./assets/whitebackground.png')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.greeting}>Hello Ajith!</Text>
          <View style={styles.vacationMode}>
            <Text style={styles.vacationModeText}>Vacation Mode</Text>
            <Switch
              value={vacationMode}
              onValueChange={(value) => setVacationMode(value)}
            />
          </View>
        </View>

        <ScrollView>
          <Text style={styles.tableLabel}>Edit the time you want the detection to work at</Text>
          <View style={styles.tableContainer}>
            <Table borderStyle={styles.tableBorder}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text} />
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('CarDetails')}>
            <Image source={require('./assets/caricon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,

  },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding background color with opacity
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vacationMode: {
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  vacationModeText: {
    paddingTop: 10,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  tableLabel: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingTop: 10,
    paddingVertical: 10,
  },
  tableContainer: {
    marginTop: 20,
    marginBottom: 150,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  tableBorder: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});