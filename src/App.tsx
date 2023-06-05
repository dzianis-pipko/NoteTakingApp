import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NoteTakingInput} from 'components/NoteTakingInput';
import {HomeScreen} from 'screens';

const App: React.FC = () => {
  const [shouldCreateNewNote, setShouldCreateNewNote] =
    useState<boolean>(false);

  const saveNote = async (text: string) => {
    await AsyncStorage.setItem('note', text);
    setShouldCreateNewNote(false);
  };

  return (
    <View style={styles.container}>
      <Text>Title</Text>

      {shouldCreateNewNote ? (
        <NoteTakingInput saveNote={saveNote} />
      ) : (
        <HomeScreen tooleNewNote={setShouldCreateNewNote} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
