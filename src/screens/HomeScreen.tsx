import React from 'react';
import {Button, Text} from 'react-native';

type Props = {
  tooleNewNote: (toggle: boolean) => void;
};
export const HomeScreen: React.FC<Props> = ({tooleNewNote}) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button title="New Note" onPress={() => tooleNewNote(true)} />
    </>
  );
};
