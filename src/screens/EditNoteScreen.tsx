import {useNavigation, useRoute} from '@react-navigation/native';
import {DeleteNote, NoteTakingInput} from 'components';
import React, {useLayoutEffect} from 'react';
import {EditScreenRouteProp, ScreenNavigationProp} from '../types';

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? 'Edit Note' : 'New Note',
      headerRight: () => noteId && <DeleteNote noteId={noteId} />,
    });
  }, [navigation, noteId]);

  return <NoteTakingInput noteId={noteId} />;
};
