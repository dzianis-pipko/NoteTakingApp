import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {TextInput, StyleSheet, Button, ScrollView} from 'react-native';
import {getNote, saveNote} from 'services';
import {ScreenNavigationProp} from 'types';
import {SaveNote} from './SaveNote';

type Props = {
  // saveNote: (text: string) => void;
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({noteId}) => {
  const [text, setText] = useState<string>('');
  const navigation = useNavigation<ScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        noteId && <SaveNote title="Back" text={text} noteId={noteId} />,
    });
  }, [navigation, text, noteId]);

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then(res => setText(res?.text ?? ''));
    }
  }, [noteId]);

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />

      {/* {noteId && <SaveNote title="Save Note" text={text} noteId={noteId} />} */}
      <SaveNote title="Save Note" text={text} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffb70342',
    width: '100%',
    flex: 0.9,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
