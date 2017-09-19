import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Text } from '../components/index';

storiesOf('Text', module)
  .add('default', () => (
    <Text>Exlore Worly</Text>
  ))