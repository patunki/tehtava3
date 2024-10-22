import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';

export default function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
    </View>
  );
}
