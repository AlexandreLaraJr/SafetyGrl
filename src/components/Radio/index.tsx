import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export function Radio() {

  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
    </View>
  );
}
