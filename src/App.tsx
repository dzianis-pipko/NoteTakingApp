import React from 'react';
import {EditNoteScreen, HomeScreen} from 'screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {NewNoteButton} from 'components';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'All notes',
            headerRight: () => <NewNoteButton />,
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
