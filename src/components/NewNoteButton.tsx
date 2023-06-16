import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {ScreenNavigationProp} from '../types';

export const NewNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Button
      title="New Note"
      onPress={() => navigation.navigate('EditNote', {noteId: undefined})}
    />
  );
};
