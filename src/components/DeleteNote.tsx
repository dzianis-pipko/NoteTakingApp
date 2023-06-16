import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {deleteNote} from 'services';
import {ScreenNavigationProp} from 'types';

type Props = {
  noteId: string;
};

export const DeleteNote: React.FC<Props> = ({noteId}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const deleteNoteHandler = async () => {
    await deleteNote(noteId);
    navigation.navigate('Home');
  };
  return <Button title="Delete Note" onPress={deleteNoteHandler} />;
};
