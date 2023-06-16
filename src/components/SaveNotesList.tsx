import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Note, getAllNotes} from 'services';
import {ScreenNavigationProp} from 'types';

export const SaveNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();

  useFocusEffect(() => {
    getAllNotes().then(res => setNotes(res.notes));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map(note => (
          <Pressable
            key={note.id}
            onPress={() => navigation.navigate('EditNote', {noteId: note.id})}>
            <View style={styles.row}>
              <Text style={styles.note}>
                {note.text.length === 0 ? '(Blank note)' : note.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  row: {
    width: '90%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    alignSelf: 'center',
    height: 90,
    justifyContent: 'center',
  },
  note: {
    paddingVertical: 20,
    width: '100%',
    fontSize: 16,
  },
});
