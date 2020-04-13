import React from 'react';
import { Switch, Platform } from 'react-native';

import { theme } from '../constants';

const WHITE_COLOR = '#fff';

export default class SwitchInput extends React.PureComponent {
  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === 'android') {
      thumbColor = WHITE_COLOR;
      if (props.value) thumbColor = theme.colors.secondary;
    }

    return (
      <Switch
        thumbColor={thumbColor}
        ios_backgroundColor={WHITE_COLOR}
        trackColor={{
          // false: WHITE_COLOR,
          true: theme.colors.secondary
        }}
        value={value}
        {...props}
      />
    );
  }
}
