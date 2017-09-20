import { keys } from 'lodash';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import * as basicComponents from "./basic";

const addStories = function(stories) {
  let newStories = storiesOf(stories.title, module);
  keys(stories.components).forEach(function (key) {
    stories.components[key](newStories)
  })
};

addStories({
  title: 'Basic Components',
  components: basicComponents
})