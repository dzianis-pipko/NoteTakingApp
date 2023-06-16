import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {saveNote} from 'services';
import {ScreenNavigationProp} from 'types';

type Props = {
  title: string;
  text: string;
  noteId?: string;
};

export const SaveNote: React.FC<Props> = ({title, text, noteId}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const saveNoteHandler = async () => {
    await saveNote(text, noteId);
    navigation.navigate('Home');
  };
  return <Button title={title} onPress={saveNoteHandler} />;
};
